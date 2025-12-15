import Movie from "../models/Movie.js";
import movieQueue from "../db/queue.js";

/**
 * @desc    Get all movies (pagination)
 * @route   GET /api/movies
 * @access  Public
 */
export const getMovies = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const movies = await Movie.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await Movie.countDocuments();

    res.json({
      success: true,
      total,
      page,
      pages: Math.ceil(total / limit),
      movies,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Search movies by name or description
 * @route   GET /api/movies/search
 * @access  Public
 */
export const searchMovies = async (req, res) => {
  try {
    const { q } = req.query;

    const movies = await Movie.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } },
      ],
    });

    res.json({ success: true, movies });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching movie",
      error: error.message,
    });
  }
};

/**
 * @desc    Sort movies
 * @route   GET /api/movies/sorted
 * @access  Public
 */
export const sortMovies = async (req, res) => {
  try {
    const { sortBy, order } = req.query;

    const validFields = ["title", "rating", "releaseDate", "duration"];
    if (!validFields.includes(sortBy)) {
      return res.status(400).json({ message: "Invalid sort field" });
    }

    const sortOrder = order === "desc" ? -1 : 1;

    const movies = await Movie.find().sort({ [sortBy]: sortOrder });

    res.json({ success: true, movies });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Add new movie (Admin only - Queue based)
 * @route   POST /api/movies
 * @access  Admin
 */
export const addMovie = async (req, res) => {
  try {
    const movieData = req.body;

    // Prevent duplicate movies (title + releaseDate)
    const exists = await Movie.findOne({
      title: movieData.title,
      releaseDate: movieData.releaseDate,
    });

    if (exists) {
      return res.status(409).json({
        success: false,
        message: "Movie already exists",
      });
    }

    const movie = await Movie.create(movieData);

    res.status(201).json({
      success: true,
      message: "Movie added successfully",
      movie,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @desc    Update movie
 * @route   PUT /api/movies/:id
 * @access  Admin
 */
export const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie)
      return res.status(404).json({ message: "Movie not found" });

    Object.assign(movie, req.body);
    await movie.save();

    res.json({ success: true, movie });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Delete movie
 * @route   DELETE /api/movies/:id
 * @access  Admin
 */
export const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie)
      return res.status(404).json({ message: "Movie not found" });

    await movie.deleteOne();

    res.json({
      success: true,
      message: "Movie deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
