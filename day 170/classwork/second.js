// external modules
const express = require("express");

// import modules
const { toursRouter } = require("./routers/tours.controller.js");

const app = express();

app.use("/tours", toursRouter);

app.listen(3000, () => {
    console.log("Server is Running On Port 3000");
});
