const express = require("express");

const postRouter = express.Router();

const posts = [{ id: 1, author: "saba", about: "cars", main: "i love cars" }];

// show all posts
postRouter.get("/", (req, res) => {
    res.json(posts);
});

// do posts
postRouter.post("/", (req, res) => {
    const { author, about, main } = req.body;
    if (!author || !about || !main) {
        return res.status(404).json({
            status: "Fail",
            message: "Fill All Fields to post: author, about, main",
        });
    }
    const post = {
        id: posts[posts.length - 1].id + 1,
        author,
        about,
        main,
    };
    posts.push(post);
    return res.status(201).send(post);
});

// delete posts
postRouter.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = posts.findIndex((post) => post.id === id);

    if (index === -1) {
        return res.status(404).json({
            status: "Fail",
            message: "Invalid post ID",
        });
    }
    posts.splice(index, 1);
    return res.status(204).send();
});

module.exports = postRouter;
