const http = require("http");
const fs = require("fs");
const url = require("url");
// controler

const getCars = (req, res) => {
    return res.end(fs.readFileSync("./cars.json", "utf-8"));
};

const deleteCar = (req, res) => {
    const urlParts = url.parse(req.url, true);
    const carId = parseInt(urlParts.query.id);

    const cars = JSON.parse(fs.readFileSync("./cars.json", "utf-8"));
    const filteredCars = cars.filter((car) => car.id !== carId);

    fs.writeFileSync("./cars.json", JSON.stringify(filteredCars));
    return res.end(`<h1>Car Succsesfuly deleted</h1>`);
};

const createtCars = (req, res) => {
    let body = "";

    req.on("data", (chunck) => {
        body += chunck.toString();
    });
    req.on("end", () => {
        const newCard = JSON.parse(body);
        const cars = JSON.parse(fs.readFileSync("./cars.json", "utf-8"));
        newCard.id = cars.length ? cars[cars.length - 1].id + 1 : 1;
        cars.push(newCard);

        // write file
        fs.writeFileSync("./cars.json", JSON.stringify(cars));
        res.writeHead(200, { "content-type": "application/json" });
        return res.end(JSON.stringify(newCard));
    });
};

const server = http.createServer((req, res) => {
    const { url, method } = req;

    switch (method) {
        case "GET":
            return getCars(req, res);
        case "DELETE":
            return deleteCar(req, res);
        case "POST":
            return createtCars(req, res);
    }
});

server.listen(2000, () => {
    console.log("Server is Running At 2000 port");
});
