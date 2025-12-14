import React, { useEffect, useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieById } from "../../api/movieApi";
import useMovies from "../../hooks/useMovies";


const EditMovie = () => {
const { id } = useParams();
const navigate = useNavigate();
const { editMovie } = useMovies();
const [movie, setMovie] = useState({ title: "", description: "", releaseDate:"",duration:"",rating:""});


useEffect(() => {
getMovieById(id).then((res) => setMovie(res.movie));
}, [id]);


const handleSubmit = async (e) => {
e.preventDefault();
await editMovie(id, movie);
navigate("/");
};


return (
<Container sx={{ mt: 4 }}>
<Typography variant="h4">Edit Movie</Typography>
<form onSubmit={handleSubmit}>
<TextField
fullWidth
label="Title"
margin="normal"
value={movie.title}
onChange={(e) => setMovie({ ...movie, title: e.target.value })}
/>
<TextField
fullWidth
label="Description"
margin="normal"
multiline
rows={4}
value={movie.description}
onChange={(e) => setMovie({ ...movie, description: e.target.value })}
/>

<TextField
fullWidth
label="releaseDate"
margin="normal"
required
rows={4}
onChange={(e) => setMovie({ ...movie, releaseDate: e.target.value })}
/>

<TextField
fullWidth
label="duration"
margin="normal"
required
rows={4}
onChange={(e) => setMovie({ ...movie, duration: e.target.value })}
/>

<TextField
fullWidth
label="rating"
margin="normal"
required
rows={4}
onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
/>

<Button type="submit" variant="contained" sx={{ mt: 2 }}>
Update
</Button>
</form>
</Container>
);
};


export default EditMovie;