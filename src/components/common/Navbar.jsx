import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const Navbar = () => {
const { user, logout } = useContext(AuthContext);
const navigate = useNavigate();


const handleLogout = () => {
logout();
navigate("/login");
};


return (
<AppBar position="static">
<Toolbar>
<Typography
variant="h6"
component={Link}
to="/"
sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
>
movieMash
</Typography>

<Box>
  <Button color="inherit" component={Link} to="/">
    Home
  </Button>

  <Button color="inherit" component={Link} to="/search">
    Search
  </Button>

  {user?.role === "admin" && (
    <Button color="inherit" component={Link} to="/admin">
      Admin
    </Button>
  )}

  {user ? (
    <Button color="inherit" onClick={handleLogout}>
      Logout
    </Button>
  ) : (
    <Button color="inherit" component={Link} to="/login">
      Login
    </Button>
  )}
   <Button color="inherit" component={Link} to="/register">
      Register
    </Button>
</Box>


</Toolbar>
</AppBar>
);
};


export default Navbar;