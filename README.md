 Movie Web App

A MERN-stack Movie Web Application built with **Node.js**, **Express**, **MongoDB**, and **React**.  
This app allows users to register, login, and manage movies with secure authentication using JWT.



Features

 Backend
- RESTful API built with Express and Node.js
- JWT Authentication (Login & Register)
- MongoDB database for storing users and movies
- Secure middlewares (auth protection)
- Movie duplication prevention

 Frontend
- Axios for HTTP calls
- Token-based authentication with JWT
- React client protected routes



## 🛠 Tech Stack

 Layer        - Technology 
---------------------------
 Backend      - Node.js, Express
 Database     - MongoDB, Mongoose 
 Authentication - JWT 
 Frontend     - React, Axios 
 Deployment   - Railway / Vercel 



Project Structure

movie-webapp/
|- backend/
│ |- controllers/
│ ├- middlewares/
│ |- models/
│ |- routes/
│ |- server.js
|- frontend/
│ |- src/
│ |- vite.config.js
|- .env
|- package.json

 https://github.com/Sandesh-MCC/movie-webapp.git

Backend Setup

cd backend

PORT=5000
MONGO_URI=mongodb+srv://sandeshmali:sandeshmali@cluster0.sopfoxd.mongodb.net/movie_webapp
JWT_SECRET=kasihfibcbsvidhfifubfwihqidiwb

run backend command
npm start


