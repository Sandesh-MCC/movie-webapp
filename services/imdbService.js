import axios from "axios";
import cheerio from "cheerio";

/**
 * Fetch IMDb Top 250 movies and normalize data
 * @returns {Array<Object>} movies
 */
export const fetchImdbTop250 = async () => {
  try {
    const url = "https://www.imdb.com/chart/top/?ref_=nv_mv_250";
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    const $ = cheerio.load(data);
    const movies = [];

    $(".ipc-metadata-list-summary-item").each((index, element) => {
      const title = $(element)
        .find("h3")
        .text()
        .replace(/^\d+\.\s*/, "");

      const rating = parseFloat(
        $(element).find(".ipc-rating-star").text()
      );

      const metadata = $(element)
        .find(".cli-title-metadata span")
        .map((i, el) => $(el).text())
        .get();

      const year = metadata[0];
      const durationText = metadata[1]; // e.g. "2h 22m"

      let duration = 0;
      if (durationText) {
        const hours = durationText.match(/(\d+)h/);
        const minutes = durationText.match(/(\d+)m/);
        duration =
          (hours ? parseInt(hours[1]) * 60 : 0) +
          (minutes ? parseInt(minutes[1]) : 0);
      }

      const imdbId = $(element)
        .find("a")
        .attr("href")
        ?.split("/")[2];

      movies.push({
        title,
        description: "IMDb Top 250 Movie",
        rating,
        duration,
        releaseDate: year ? new Date(`${year}-01-01`) : null,
        imdbId,
      });
    });

    return movies;
  } catch (error) {
    console.error("IMDb fetch error:", error.message);
    throw new Error("Failed to fetch IMDb movies");
  }
};
