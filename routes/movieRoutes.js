import express from "express";
import {
  getMovies,
  searchMovies,
  sortMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movieController.js";

import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

// @route   GET /api/movies
// @desc    Get all movies (pagination)
// @access  Public
router.get("/", getMovies);

// @route   GET /api/movies/search?q=keyword
// @desc    Search movies by title or description
// @access  Public
router.get("/search", searchMovies);

// @route   GET /api/movies/sorted?sortBy=rating&order=desc
// @desc    Sort movies
// @access  Public
router.get("/sorted", sortMovies);

// @route   POST /api/movies
// @desc    Add new movie (Admin only)
// @access  Admin
router.post(
  "/",
  authMiddleware,
  roleMiddleware(["admin"]),
  addMovie
);

// @route   PUT /api/movies/:id
// @desc    Update movie (Admin only)
// @access  Admin
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware(["admin"]),
  updateMovie
);

// @route   DELETE /api/movies/:id
// @desc    Delete movie (Admin only)
// @access  Admin
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware(["admin"]),
  deleteMovie
);

export default router;
