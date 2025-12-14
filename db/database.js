import mongoose from 'mongoose'

export const connectDB=async()=>{
    await mongoose.connect(
        "mongodb+srv://sandeshmali:sandeshmali@cluster0.sopfoxd.mongodb.net/movie_webapp"
    )
    .then(()=>console.log("DB connect"))
    .catch((err)=>{
        console.log(`Failed to connect db:-${err}`)
    })
}

export default connectDB;