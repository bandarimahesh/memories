import PostMessage from "../models/postMessage.js";
// finding the data from the db
export const getPosts = async function (req, res) {
  try {
    const postMessage = await PostMessage.find();

    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
// creating the new post adding to db
export const createPost = async function (req, res) {
  const post = req.body;

  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
