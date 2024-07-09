import mongoose, { Schema } from 'mongoose'

const PostSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    prompt: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
},{timestamps:true});

const Post = mongoose.model("Post", PostSchema);

export default Post;
