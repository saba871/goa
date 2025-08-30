const express = require("express");
const {
  getPosts,
  getPost,
  addPost,
  deletePost,
  changePost,
} = require("../controllers/posts.controller");

const postRouter = express.Router();

// Get all posts
postRouter.get("/", getPosts);
// Get post by id
postRouter.get("/:id", getPost);
// Create new post
postRouter.post("/", addPost);
// Delete post by id
postRouter.delete("/:id", deletePost);
// Update post by id
postRouter.patch("/:id", changePost);

module.exports = postRouter;
