const express = require("express");

const toursRouter = express.Router();

const tours = [
    {
        id: 1,
        name: "The Forest Hiker",
        duration: 5,
        maxGroupSize: 25,
        difficulty: "easy",
        ratingsAverage: 4.7,
        ratingsQuantity: 37,
        price: 397,
        summary: "Breathtaking hike through the Canadian Banff National Park",
        description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imageCover: "tour-1-cover.jpg",
        images: ["tour-1-1.jpg", "tour-1-2.jpg", "tour-1-3.jpg"],
        startDates: [
            "2021-04-25,10:00",
            "2021-07-20,10:00",
            "2021-10-05,10:00",
        ],
    },
    {
        id: 2,
        name: "The Sea Explorer",
        duration: 7,
        maxGroupSize: 15,
        difficulty: "medium",
        ratingsAverage: 4.8,
        ratingsQuantity: 23,
        price: 497,
        summary: "Exploring the jaw-dropping US east coast by foot and by boat",
        description:
            "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imageCover: "tour-2-cover.jpg",
        images: ["tour-2-1.jpg", "tour-2-2.jpg", "tour-2-3.jpg"],
        startDates: [
            "2021-06-19,10:00",
            "2021-07-20,10:00",
            "2021-08-18,10:00",
        ],
    },
    {
        id: 3,
        name: "The Snow Adventurer",
        duration: 4,
        maxGroupSize: 10,
        difficulty: "difficult",
        ratingsAverage: 4.5,
        ratingsQuantity: 13,
        price: 997,
        summary: "Exciting adventure in the snow with snowboarding and skiing",
        description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
        imageCover: "tour-3-cover.jpg",
        images: ["tour-3-1.jpg", "tour-3-2.jpg", "tour-3-3.jpg"],
        startDates: [
            "2022-01-05,10:00",
            "2022-02-12,10:00",
            "2023-01-06,10:00",
        ],
    },
    {
        id: 4,
        name: "The City Wanderer",
        duration: 9,
        maxGroupSize: 20,
        difficulty: "easy",
        ratingsAverage: 4.6,
        ratingsQuantity: 54,
        price: 1197,
        summary:
            "Living the life of Wanderlust in the US' most beatiful cities",
        description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat lorem ipsum dolor sit amet.\nConsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat!",
        imageCover: "tour-4-cover.jpg",
        images: ["tour-4-1.jpg", "tour-4-2.jpg", "tour-4-3.jpg"],
        startDates: [
            "2021-03-11,10:00",
            "2021-05-02,10:00",
            "2021-06-09,10:00",
        ],
    },
    {
        id: 5,
        name: "The Park Camper",
        duration: 10,
        maxGroupSize: 15,
        difficulty: "medium",
        ratingsAverage: 4.9,
        ratingsQuantity: 19,
        price: 1497,
        summary:
            "Breathing in Nature in America's most spectacular National Parks",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!",
        imageCover: "tour-5-cover.jpg",
        images: ["tour-5-1.jpg", "tour-5-2.jpg", "tour-5-3.jpg"],
        startDates: [
            "2021-08-05,10:00",
            "2022-03-20,10:00",
            "2022-08-12,10:00",
        ],
    },
];

toursRouter.get("/", (req, res) => {
    res.json(tours);
});

toursRouter.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const filteredTour = tours.find((tour) => tour.id === id);

    if (!id) {
        res.status(404).send("Invalid Tour ID");
    } else {
        res.send(filteredTour);
    }
});

toursRouter.post("/", express.json(), (req, res) => {
    const { name, price, duration } = req.body;

    if (!name || !price || !duration) {
        return res.status(400).json({
            status: "Fail",
            message: "All Fields required: name price duration",
        });
    }
    const tour = {
        name,
        price,
        duration,
        id: tours[tours.length - 1].id + 1, // Date now
    };

    tour.push(tours);
    return res.status(201).send(tour);
});

// put patch
toursRouter.patch("/:id", express.json(), (req, res) => {
    const { name, price, duration } = req.body;
    const id = parseInt(req.params.id);
    const index = tours.findIndex((obj) => obj.id === id);

    if (index == -1) {
        res.status(404).json({
            status: "Fail",
            message: "All Fields required: name price duration",
        });
    }
    if (name !== undefined) tours[index].name == name;
    if (price !== undefined) tours[index].price == price;
    if (duration !== undefined) tours[index].duration == duration;

    return res.json(tours[index]);
});

toursRouter.delete("/:id", (req, res) => {
    const id = req.params.id;
    const index = tours.findIndex((obj) => obj.id === id);

    if (index === -1) {
        return res.status(404).json({
            status: "Fail",
            message: "Tour Not Found",
        });
    } else {
        tours.splice(index, 1);
        return res.status(204).send();
    }
});

module.exports = {
    toursRouter,
};
