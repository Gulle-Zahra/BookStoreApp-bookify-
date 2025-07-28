import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from 'cors';

const app = express()

//middleware : it works when frontend and backend are on different ports
// this middleware allows the frontend to access the backend
app.use(cors());

// this middleware parse the incoming data from body to json format
app.use(express.json());


dotenv.config()

const PORT=process.env.PORT || 4000
const URI=process.env.MongoDb_URI

//database connection
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("Database connected successfully")
    
} catch (error) {
   console.log("Error",error)
    
}

//defining routes
app.use("/book",bookRoute)

app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})