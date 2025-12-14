import React, { createContext, useEffect, useState } from "react";
import { loginUser, registerUser, getProfile } from "../api/authApi";


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);


// Load user from token on app start
useEffect(() => {
const initializeAuth = async () => {
const token = localStorage.getItem("token");
if (!token) {
setLoading(false);
return;
}


try {
const profile = await getProfile();
setUser(profile.user);
} catch (error) {
localStorage.removeItem("token");
setUser(null);
} finally {
setLoading(false);
}
};


initializeAuth();
}, []);


// Login
const login = async (credentials) => {
const data = await loginUser(credentials);
localStorage.setItem("token", data.token);
setUser(data.user);
};


// Register
const register = async (userData) => {
const data = await registerUser(userData);
localStorage.setItem("token", data.token);
setUser(data.user);
};


// Logout
const logout = () => {
localStorage.removeItem("token");
setUser(null);
};


return (
<AuthContext.Provider
value={{
user,
loading,
login,
register,
logout,
isAuthenticated: !!user,
isAdmin: user?.role === "admin",
}}
>
{children}
</AuthContext.Provider>
);
};