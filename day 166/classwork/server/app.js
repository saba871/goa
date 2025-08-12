// buildin modules
const http = require("http");
const fs = require("fs");

// controller
const { readFile } = require("./utils/dataMethods.js");

const routes = (req, res) => {
    const { url, method } = req;

    if (url == "/tours" && method == "GET") {
        res.writeHead(200, { "content-type": "application/json" });
        return res.end(readFile("./data/tour.json"));
    }
};

const server = http.createServer((req, res) => {
    return routes(req, res);
});

server.listen(2000, () => {
    console.log("Server is running on 2000 port");
});
