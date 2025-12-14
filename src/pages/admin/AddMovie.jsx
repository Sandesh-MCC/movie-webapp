import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import useMovies from "../../hooks/useMovies";
import { useNavigate } from "react-router-dom";


const AddMovie = () => {
const [movie, setMovie] = useState({ 
        title: "",
    description: "",
    releaseDate: "",
    duration: "",
    rating: "",
    poster: "", // New field for the movie poster URL
});
const { createMovie } = useMovies();
const navigate = useNavigate();


const handleSubmit = async (e) => {
e.preventDefault();
await createMovie(movie);
navigate("/");
};


return (
<Container sx={{ mt: 4 }}>
<Typography variant="h4">Add Movie</Typography>
<form onSubmit={handleSubmit}>
<TextField
fullWidth
label="Title"
margin="normal"
required
onChange={(e) => setMovie({ ...movie, title: e.target.value })}
/>

<TextField
fullWidth
label="Description"
margin="normal"
multiline
rows={4}
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

 <TextField
          fullWidth
          label="Poster URL"
          margin="normal"
          required
          onChange={(e) => setMovie({ ...movie, poster: e.target.value })}
        />

<Button type="submit" variant="contained" sx={{ mt: 2 }}>
Save
</Button>
</form>
</Container>
);
};


export default AddMovie;