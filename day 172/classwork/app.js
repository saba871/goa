const express = require("express");
const postRouter = require("./routers/post.router");

const app = express();

app.use("/posts", postRouter);

app.listen(3000, () => {
  console.log("Server is Running");
});
