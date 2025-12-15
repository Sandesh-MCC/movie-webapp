import Queue from "bull";
import Movie from "../models/Movie.js";

// Redis connection
const redisConfig = {
  host: process.env.REDIS_URL || "127.0.0.1",
  port: process.env.REDIS_PORT || 6379,
};

// Create queue
const movieQueue = new Queue("movie-queue", { redis: redisConfig });

// Queue processor (runs in background)
movieQueue.process(async (job) => {
  try {
    const movieData = job.data;

    // Prevent duplicate movies (by title + year)
    const exists = await Movie.findOne({
      title: movieData.title,
      releaseDate: movieData.releaseDate,
    });

    if (!exists) {
      await Movie.create(movieData);
      console.log(`Inserted movie: ${movieData.title}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Queue processing error:", error.message);
    throw error;
  }
});

// Queue event listeners
movieQueue.on("completed", (job) => {
  console.log(`Job ${job.id} completed`);
});

movieQueue.on("failed", (job, err) => {
  console.error(`Job ${job.id} failed:`, err.message);
});

export default movieQueue;
