import express from "express";
import { createPost, getAllPosts } from "../controllers/Posts.controller";
import { generateImage } from "../controllers/GenerateAIImage.controller";

const router = express.Router();

router.post("/", generateImage);

export default router;

