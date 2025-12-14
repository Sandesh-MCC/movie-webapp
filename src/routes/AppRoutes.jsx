import React from "react";
import { Routes, Route } from "react-router-dom";


// Common Components
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ProtectedRoute from "../components/common/ProtectedRoute";


// User Pages
import Home from "../pages/user/Home";
import Search from "../pages/user/Search";
import MovieDetails from "../pages/user/MovieDetails";


// Admin Pages
import AdminDashboard from "../pages/admin/AdminDashboard";
import AddMovie from "../pages/admin/AddMovie";
import EditMovie from "../pages/admin/EditMovie";


// Auth Pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";


const AppRoutes = () => {
return (
<>
<Navbar />


<Routes>
{/* Public Routes */}
<Route path="/" element={<Home />} />
<Route path="/search" element={<Search />} />
<Route path="/movies/:id" element={<MovieDetails />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />


{/* Admin Protected Routes */}
<Route
path="/admin"
element={
<ProtectedRoute adminOnly>
<AdminDashboard />
</ProtectedRoute>
}
/>


<Route
path="/admin/add"
element={
<ProtectedRoute adminOnly>
<AddMovie />
</ProtectedRoute>
}
/>


<Route
path="/admin/edit/:id"
element={
<ProtectedRoute adminOnly>
<EditMovie />
</ProtectedRoute>
}
/>
</Routes>


<Footer />
</>
);
};


export default AppRoutes;