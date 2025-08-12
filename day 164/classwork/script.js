const http = require("http");
const fs = require("fs");
const cars = fs.readFileSync("./cars.json", "utf-8");

const server = http.createServer((req, res) => {
    const pathName = req.url;
    const method = req.method;

    if (pathName == "/cars" && method == "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(cars);
    } else if (pathName == "/car" && method == "POST") {
        res.end("Car has added to file");
    } else {
        res.writeHead(404);
    }
});

server.listen(2000, () => {
    console.log("server is running");
});
