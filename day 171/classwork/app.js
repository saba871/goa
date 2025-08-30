// External modules
const express = require("express");

// Routers
const { router: userRouter } = require("./routers/user.controller.js");
const postRouter = require("./routers/post.controller.js");

const app = express();

app.use(express.json());

app.use("/posts", postRouter);
app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Server is runing on port 3000");
});
