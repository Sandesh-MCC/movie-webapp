import React, { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import MovieList from "../../components/movies/MovieList";
import MoviePagination from "../../components/movies/MoviePagination";
import Loader from "../../components/common/Loader";
import useMovies from "../../hooks/useMovies";
import useAuth from "../../hooks/useAuth";


const Home = () => {
const { movies, loading, page, totalPages, fetchMovies, deleteMovie } = useMovies();
const { isAdmin } = useAuth();


useEffect(() => {
fetchMovies(page);
}, [page]);


if (loading) return <Loader />;


return (
<Container sx={{ mt: 4 }}>
<Typography variant="h4" gutterBottom>
Top Movies
</Typography>
<MovieList movies={movies} isAdmin={isAdmin} onDelete={deleteMovie} />
<MoviePagination
page={page}
totalPages={totalPages}
onPageChange={(p) => fetchMovies(p)}
/>
</Container>
);
};


export default Home;