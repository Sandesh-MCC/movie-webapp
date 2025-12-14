import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const useMoviesHook = () => {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error("useMovies must be used within a MovieProvider");
  }

  return {
    movies: context.movies,
    loading: context.loading,
    page: context.page,
    totalPages: context.totalPages,

    fetchMovies: context.fetchMovies,
    sortMovies: context.sortMovies,

    // 🔑 renamed to avoid recursion
    searchMovies: context.search,

    createMovie: context.createMovie,
    editMovie: context.editMovie,
    deleteMovie: context.removeMovie,

    setPage: context.setPage,
  };
};

export default useMoviesHook;
