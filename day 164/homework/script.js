const http = require("http");
const fs = require("fs");
const cars = fs.readFileSync("./cars.json", "utf-8");

const server = http.createServer((req, res) => {
    const pathName = req.url;
    const method = req.method;

    if (pathName == "/cars" && method == `GET`) {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(cars);
    } else {
        res.writeHead(404);
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("server is running on 3000 port");
});
