const express = require("express");
const app = express();

const cars = [
    {
        id: 1,
        brend: "BMW",
        model: "M3",
    },
    {
        id: 2,
        brend: "MERCEDES",
        model: "gls",
    },
];

app.get("/cars", (req, res) => {
    res.json(cars);
});

app.delete("/cars/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const findIndexer = cars.findIndex((car) => car.id === id);
    cars.splice(findIndexer, 1);

    res.status(204).send();
});

app.post("/cars", express.json(), (req, res) => {
    const { brend, model } = req.body;

    const car = {
        brend,
        model,
        id: cars[cars.length - 1].id + 1,
    };

    cars.push(car);
    return res.status(201).json(car);
});

/*
simple express code
*/
app.get("/cars/:CarId", (req, res) => {
    const id = parseInt(req.params.CarId);
    const car = cars.find((car) => car.id == id);

    if (!car) {
        return res.status(404).send("Car not Found");
    } else {
        return res.send(car);
    }
});

app.listen(3000, () => {
    console.log("Server is Runnning");
});
