import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

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

//=========== Default route =============
app.get("/", async (req,res) => {
    res.status(200).json({
        message: "Hello User...!!",
    })
})


//============ Server Running Function ===================
const startServer = () =>{
    try {
        app.listen(PORT, () => {
            console.log("Server started on Port: ",PORT);
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();