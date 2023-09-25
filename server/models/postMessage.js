import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    power: Number,
    createdAt: {
        type: Date,
        default: new Date();
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;