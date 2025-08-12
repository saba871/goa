const express = require("express");
const carsRouter = express.Router();

const cars = [
    { id: 1, brand: "bmw", model: "M3", year: 2006 },
    { id: 2, brand: "mersedec", model: "long", year: 1996 },
    { id: 3, brand: "audi", model: "Rs8", year: 2018 },
];

// gets All Cars On array
carsRouter.get("/", (req, res) => {
    return res.json(cars);
});

// find car by id
carsRouter.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const findCar = cars.find((car) => car.id === id);
    if (!findCar) {
        res.status(404).send({
            status: "Fail",
            message: "Invalid ID",
        });
    } else {
        res.json(findCar);
    }
});

// post
carsRouter.post("/", express.json(), (req, res) => {
    const { brand, model, year } = req.body;

    if (!brand || !model || !year) {
        res.status(404).json({
            status: "fail",
            message: "Fill All Fields: brand, model, year",
        });
    }
    const car = {
        brand,
        model,
        year,
        id: cars[cars.length - 1].id + 1,
    };

    cars.push(car);
    return res.status(201).send(car);
});

// delete car
carsRouter.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = cars.findIndex((car) => car.id === id);

    if (index === -1) {
        res.status(404).json({
            status: "Fail",
            message: "Cannnot Found Car",
        });
    } else {
        cars.splice(index, 1);
        return res.status(204).send();
    }
});

module.exports = carsRouter;
