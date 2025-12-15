import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import http from "http";

import connectDB from "./db/database.js";
import authRoutes from "./routes/authRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";


dotenv.config();

// Connect Database
connectDB();

// Initialize app
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(
  cors({
    origin: "http://localhost:5173", // change if needed
    credentials: true,
  })
);


if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}


app.get("/", (req, res) => {
  res.send("Movie API is running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);


app.use((req, res, next) => {
  res.status(404);
  next(new Error(`Not Found - ${req.originalUrl}`));
});

app.use(errorMiddleware);


const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});


process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err.message);
  server.close(() => process.exit(1));
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err.message);
  process.exit(1);
});
