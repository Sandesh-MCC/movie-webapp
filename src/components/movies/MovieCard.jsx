import React from "react";
import {
Card,
CardContent,
CardMedia,
Typography,
CardActions,
Button,
Rating,
} from "@mui/material";
import { Link } from "react-router-dom";


const MovieCard = ({ movie, isAdmin = false, onDelete }) => {
return (
<Card sx={{ maxWidth: 300, height: "100%", display: "flex", flexDirection: "column" }}>
<CardMedia
component="img"
height="350"
image={movie.poster || "https://m.media-amazon.com/images/I/81vRg6RVaFL._AC_UF894,1000_QL80_.jpg"}
alt={movie.title}
/>


<CardContent sx={{ flexGrow: 1 }}>
<Typography variant="h6" gutterBottom noWrap>
{movie.title}
</Typography>


<Rating value={movie.rating || 0} precision={0.1} readOnly />


<Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
{movie.description?.substring(0, 80)}...
</Typography>


<Typography variant="caption" display="block" sx={{ mt: 1 }}>
Release: {movie.releaseDate}
</Typography>
</CardContent>


<CardActions sx={{ justifyContent: "space-between" }}>
<Button size="small" component={Link} to={`/movies/${movie._id}`}>
View
</Button>


{isAdmin && (
<>
<Button size="small" component={Link} to={`/admin/edit/${movie._id}`}>
Edit
</Button>
<Button
size="small"
color="error"
onClick={() => onDelete(movie._id)}
>
Delete
</Button>
</>
)}
</CardActions>
</Card>
);
};


export default MovieCard;