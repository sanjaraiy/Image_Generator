import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api/v1",
})

export const GetPosts = async () => await API.get("/post/");
export const CreatePost = async () => await API.post("/post/", data);
export const GenerateImage = async () => await API.post("/generateImage/", data);
