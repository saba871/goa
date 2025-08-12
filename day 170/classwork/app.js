const express = require("express");
const app = express();

// 1) link parameters
// 2) query
// 3) body

const tours = [
    { id: 3, name: "Snow Adventurer", price: 997, duration: 4 },
    { id: 1, name: "Forest Hiker", price: 397, duration: 5 },
    { id: 4, name: "City Wanderer", price: 1197, duration: 9 },
    { id: 2, name: "Sea Explorer", price: 497, duration: 7 },
    { id: 5, name: "Park Camper", price: 1497, duration: 10 },
];

app.get("/tours", (req, res) => {
    const { sort } = req.query;

    const copiedTours = [...tours];

    // sort = price : asc
    // sort = -price : desc

    if (sort === "price") {
        copiedTours.sort((a, b) => a.price - b.price);
    } else if (sort === "-price") {
        copiedTours.sort((a, b) => b.price - a.price);
    }

    if (sort === "duration") {
        copiedTours.sort((a, b) => a.duration - b.duration);
    } else if (sort === "-duration") {
        copiedTours.sort((a, b) => b.duration - a.duration);
    }

    res.json(copiedTours);
});

app.get("/tour/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const findTour = tours.find((tour) => tour.id === id);

    if (!findTour) {
        res.status(404).json({
            status: "fail",
            message: "Ivalid ID",
        });
    } else {
        res.json(findTour);
    }
});

app.listen(3000, () => {
    console.log("Server is runing on port 3000");
});
