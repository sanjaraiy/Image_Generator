import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import PostRouter from "./routes/Posts.route";
import GenerateImageRouter from "./routes/GenerateAIImage.route";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const URL = process.env.MONGODB_URI;

//========== default middlewares ===================
app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended: true}));
app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success:false,
        status,
        message,
    }) 
})


app.use("/api/v1/post", PostRouter);
app.use("/api/v1/generateImage",  GenerateImageRouter)
//=========== Default route =============
app.get("/", async (req,res) => {
    res.status(200).json({
        message: "Hello User...!!",
    })
})



//============ Connect to mongodb ==============
const connectDB = () => {
    mongoose.set("strictQuery", true);
    mongoose.connect(URL)
    .then(() => {
           console.log("Successfully Connected MongoDB...!!");
    })
    .catch((err) => {
        console.error("Failed to Connect to DB");
    })
}

//============ Server Running Function ===================
const startServer = () =>{
    try {
        connectDB()
        app.listen(PORT, () => {
            console.log("Server started on Port: ",PORT);
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();