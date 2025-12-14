import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const Register = () => {
const [form, setForm] = useState({ name: "", email: "", password: "" });
const { register } = useAuth();
const navigate = useNavigate();


const handleSubmit = async (e) => {
e.preventDefault();
await register(form);
navigate("/");
};


return (
<Container sx={{ mt: 4 }}>
<Typography variant="h4">Register</Typography>
<form onSubmit={handleSubmit}>
<TextField fullWidth label="Name" margin="normal" onChange={(e) => setForm({ ...form, name: e.target.value })} />
<TextField fullWidth label="Email" margin="normal" onChange={(e) => setForm({ ...form, email: e.target.value })} />
<TextField fullWidth label="Password" type="password" margin="normal" onChange={(e) => setForm({ ...form, password: e.target.value })} />
<Button type="submit" variant="contained" sx={{ mt: 2 }}>
Register
</Button>
</form>
</Container>
);
};


export default Register;