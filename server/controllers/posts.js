import Post from "../models/Post.js";
import User from "../models/User.js";

/* CREATE */
export const createPost = async (req, res) => {
    try {
        const {userId, description, picturePath} = req.body;

        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstname: user.firstName,
            lastname: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {}, //would be {"someid": true} if someones likes the post
            comments: []
        })

        await newPost.save();
        const post = await Post.find(); //grabs all the post not the latest post
        res.status(201).json(post);

    } catch(err) {
        res.status(409).json({message: err.message});
    }
}

/* READ */
export const getFeedPosts = async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}

export const getUserPosts = async (req, res) => {
    try {
        const {userId} = req.params;
        const post = await Post.find({userId});
        res.status(200).json(post);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}

/* UPDATE */
export const likePost = async (req, res) => {
    try {
        const {id} = req.params;
        const {userId} = req.body;
        const post = await Post.find({userId});
        res.status(200).json(post);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}
