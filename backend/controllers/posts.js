import infoModel from '../models/Info.js';

export const getPosts = async (req, res) => {
    try {
        const findMessage = await infoModel.find();

        res.status(200).json(findMessage);

    } catch (error) {

        res.status(404).json({ message: error.message });
    }
};

export const createPost = async (req, res) => {

    const post = req.body;

    const newPost = new infoModel(post);

    try {

        await newPost.save()

        res.status(201).json(newPost)

    } catch (error) {

        res.status(409).json({ message: error.message })
    }
};