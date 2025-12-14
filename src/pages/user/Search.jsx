import React, { useState } from "react";
import { Container, TextField, Typography } from "@mui/material";
import MovieList from "../../components/movies/MovieList";
import Loader from "../../components/common/Loader";
import useMovies from "../../hooks/useMovies";


const Search = () => {
const [query, setQuery] = useState("");
const { movies, loading, searchMovies } = useMovies();


const handleSearch = (e) => {
setQuery(e.target.value);
searchMovies(e.target.value);
};


return (
<Container sx={{ mt: 4 }}>
<Typography variant="h4" gutterBottom>
Search Movies
</Typography>
<TextField
fullWidth
placeholder="Search by name or description"
value={query}
onChange={handleSearch}
sx={{ mb: 3 }}
/>
{loading ? <Loader /> : <MovieList movies={movies} />}
</Container>
);
};


export default Search;