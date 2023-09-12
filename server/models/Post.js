import mongoose from "mongoose";

const PostSchema = new mongoose.schema({
    userId: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    location: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    like: {
        type: Map,
        of: Boolean,
    },
    comments: {
        type: Array,
        default: [],
    },
}, {timestamps: true});

const Post = mongoose.model("Post", postSchema);

export default Post;
