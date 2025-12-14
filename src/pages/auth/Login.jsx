import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const { login } = useAuth();
const navigate = useNavigate();


const handleSubmit = async (e) => {
e.preventDefault();
await login({ email, password });
navigate("/");
};


return (
<Container sx={{ mt: 4 }}>
<Typography variant="h4">Login</Typography>
<form onSubmit={handleSubmit}>
<TextField fullWidth label="Email" margin="normal" onChange={(e) => setEmail(e.target.value)} />
<TextField fullWidth label="Password" type="password" margin="normal" onChange={(e) => setPassword(e.target.value)} />
<Button type="submit" variant="contained" sx={{ mt: 2 }}>
Login
</Button>
</form>
</Container>
);
};


export default Login;