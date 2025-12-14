import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Rating } from "@mui/material";
import { getMovieById } from "../../api/movieApi";
import Loader from "../../components/common/Loader";


const MovieDetails = () => {
const { id } = useParams();
const [movie, setMovie] = useState(null);
const [loading, setLoading] = useState(true);


useEffect(() => {
const fetchMovie = async () => {
const data = await getMovieById(id);
setMovie(data.movie);
setLoading(false);
};
fetchMovie();
}, [id]);


if (loading) return <Loader />;


return (
<Container sx={{ mt: 4 }}>
<Typography variant="h4">{movie.title}</Typography>
<Rating value={movie.rating} precision={0.1} readOnly />
<Typography sx={{ mt: 2 }}>{movie.description}</Typography>
<Typography sx={{ mt: 1 }}>Release Date: {movie.releaseDate}</Typography>
<Typography>Duration: {movie.duration} mins</Typography>
</Container>
);
};


export default MovieDetails;