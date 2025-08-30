const express = require("express");
const app = express();

const cars = [
    { id: 1, brand: "Bmw", model: "M3" },
    { id: 2, brand: "Audi", model: "rs-8" },
];

app.use("/cars", (req, res, next) => {
    let body = "";
    req.on("data", (chunck) => {
        body += chunck;
    });
    req.on("end", () => {
        req.body = JSON.parse(body);
    });
    next();
});

app.get("/cars", (req, res) => {
    return res.json(cars);
});

app.get("/cars/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const findCar = cars.find((car) => car.id === id);
    if (!findCar) {
        return res.status(404).json({
            stauts: "Fail",
            message: "Car does not exsist",
        });
    }
    return res.json(findCar);
});

app.post("/cars", express.json(), (req, res) => {
    const { brand, model } = req.body;
    if (!brand || !model) {
        return res.status(404).json({
            stauts: "Fail",
            message: "Fill All Fields: brand and model",
        });
    }
    const car = {
        id: cars[cars.length - 1].id + 1,
        brand,
        model,
    };
    cars.push(car);
    return res.json(car);
});

app.listen(3000, () => {
    console.log("Server is Running on port 3000");
});
