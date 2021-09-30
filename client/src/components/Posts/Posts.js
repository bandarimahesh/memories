import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import useStyles from "./styles.js";
const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <>
      Posts component
      <Post />
    </>
  );
};

export default Posts;
