import axios from "axios";

const url = "https://localhost:5000/posts";

export const fetchPosts = (req, res) => axios.fetch(url);
