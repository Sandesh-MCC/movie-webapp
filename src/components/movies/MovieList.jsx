import React from "react";
import { Grid, Typography } from "@mui/material";
import MovieCard from "./MovieCard";


const MovieList = ({ movies = [], isAdmin = false, onDelete }) => {
if (!movies.length) {
return <Typography>No movies found.</Typography>;
}


return (
<Grid container spacing={3}>
{movies.map((movie) => (
<Grid item xs={12} sm={6} md={4} lg={3} key={movie._id}>
<MovieCard
movie={movie}
isAdmin={isAdmin}
onDelete={onDelete}
/>
</Grid>
))}
</Grid>
);
};


export default MovieList;

