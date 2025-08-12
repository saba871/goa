// external module
const express = require("express");

// import module
const carsRouter = require("./routers/cars.controller");

const app = express();

app.use("/cars", carsRouter);

app.listen(3000, () => {
    console.log("Sever is Running On Port 3000");
});
