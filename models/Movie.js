import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Movie title is required"],
      trim: true,
      index: true,
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      index: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },

    duration: {
      type: Number, // in minutes
      required: true,
    },

    releaseDate: {
      type: Date,
      required: true,
      index: true,
    },

    poster: {
      type: String, // image URL
    },

    imdbId: {
      type: String,
      unique: true,
      sparse: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// Text index for search
movieSchema.index({ title: "text", description: "text" });

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
