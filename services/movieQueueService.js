import movieQueue from "../config/queue.js";

/**
 * Add multiple movies to queue
 * @param {Array<Object>} movies
 */
export const enqueueMovies = async (movies = []) => {
  try {
    for (const movie of movies) {
      await movieQueue.add(movie, {
        attempts: 3,
        backoff: {
          type: "exponential",
          delay: 2000,
        },
        removeOnComplete: true,
      });
    }

    console.log(`${movies.length} movies added to queue`);
  } catch (error) {
    console.error("Queue enqueue error:", error.message);
    throw error;
  }
};
