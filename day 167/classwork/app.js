const express = require("express");
const app = express();

app.get("/persons", (req, res) => {
    res.json([
        {
            name: "saba",
            age: 19,
        },
        {
            name: "luka",
            age: 19,
        },
    ]);
    console.log("Zdarova dmza");
});

app.listen(3000, () => {
    console.log("Server is Running");
});
