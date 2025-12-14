import React, { createContext, useEffect, useState } from "react";
import {
getMovies,
getSortedMovies,
searchMovies,
addMovie,
updateMovie,
deleteMovie,
} from "../api/movieApi";


export const MovieContext = createContext();
export const MovieProvider = ({ children }) => {
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(false);
const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);

// Fetch movies
const fetchMovies = async (pageNumber = 1) => {
setLoading(true);
try {
const data = await getMovies(pageNumber);
setMovies(data.movies);
setPage(data.page);
setTotalPages(data.totalPages);
} catch (error) {
console.error("Failed to fetch movies", error);
} finally {
setLoading(false);
}
};

// Sort movies
const sortMovies = async (sortBy, order) => {
setLoading(true);
try {
const data = await getSortedMovies(sortBy, order);
setMovies(data.movies);
} catch (error) {
console.error("Failed to sort movies", error);
} finally {
setLoading(false);
}
};

// Search movies
const search = async (query) => {
setLoading(true);
try {
const data = await searchMovies(query);
setMovies(data.movies);
} catch (error) {
console.error("Search failed", error);
} finally {
setLoading(false);
}
};

// Admin: Add movie
const createMovie = async (movieData) => {
const data = await addMovie(movieData);
setMovies((prev) => [data.movie, ...prev]);
};

// Admin: Update movie
const editMovie = async (id, movieData) => {
const data = await updateMovie(id, movieData);
setMovies((prev) => prev.map((m) => (m._id === id ? data.movie : m)));
};

// Admin: Delete movie
const removeMovie = async (id) => {
await deleteMovie(id);
setMovies((prev) => prev.filter((m) => m._id !== id));
};

useEffect(() => {
fetchMovies();
}, []);

return (
<MovieContext.Provider
value={{
movies,
loading,
page,
totalPages,
fetchMovies,
sortMovies,
search,
createMovie,
editMovie,
removeMovie,
setPage,
}}
>
{children}
</MovieContext.Provider>
);
};