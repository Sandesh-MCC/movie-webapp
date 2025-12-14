import axiosInstance from "./axiosInstance";


// Get all movies with pagination
export const getMovies = async (page = 1, limit = 10) => {
const response = await axiosInstance.get(`http://localhost:5000/api/movies?page=${page}&limit=${limit}`);
return response.data;
};


// Get sorted movies
export const getSortedMovies = async (sortBy, order = "asc") => {
const response = await axiosInstance.get(`http://localhost:5000/api/movies/sorted?sortBy=${sortBy}&order=${order}`);
return response.data;
};


// Search movies by name or description
export const searchMovies = async (query) => {
const response = await axiosInstance.get(`http://localhost:5000/api/movies/search?q=${query}`);
return response.data;
};


// Get single movie details
export const getMovieById = async (id) => {
const response = await axiosInstance.get(`http://localhost:5000/api/movies/${id}`);
return response.data;
};


// Admin: Add new movie
export const addMovie = async (movieData) => {
const response = await axiosInstance.post("http://localhost:5000/api/movies", movieData);
return response.data;
};


// Admin: Update movie
export const updateMovie = async (id, movieData) => {
const response = await axiosInstance.put(`/movies/${id}`, movieData);
return response.data;
};


// Admin: Delete movie
export const deleteMovie = async (id) => {
const response = await axiosInstance.delete(`/movies/${id}`);
return response.data;
};