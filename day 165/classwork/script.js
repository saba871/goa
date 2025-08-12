const http = require("http");
const fs = require("fs");
const url = require("url");

const cars = JSON.parse(fs.readFileSync("./cars.json", "utf-8"));

// simple server
const server = http.createServer((req, res) => {
    const urlParts = new URL(req.url, `http://${req.headers.host}`);
    const id = parseInt(urlParts.searchParams.get("id"));

    if (!id) {
        res.writeHead(200, { "content-type": "application/json" });
        return res.end(JSON.stringify(cars));
    }

    const car = cars.find((v) => v.id === id);

    if (!car) {
        res.writeHead(404);
        return res.end(`<h1>Car not Found</h1>`);
    }

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(car));
});

server.listen(3000, () => {
    console.log("Server is running");
});
