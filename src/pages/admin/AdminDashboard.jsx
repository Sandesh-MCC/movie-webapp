import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";


const AdminDashboard = () => {
return (
<Container sx={{ mt: 4 }}>
<Typography variant="h4" gutterBottom>
Admin Dashboard
</Typography>
<Button variant="contained" component={Link} to="/admin/add">
Add Movie
</Button>
</Container>
);
};


export default AdminDashboard;