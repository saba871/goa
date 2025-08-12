const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req);
    res.end("saba");
});

server.listen(3000, () => {
    console.log("server is running at port 3000");
});
