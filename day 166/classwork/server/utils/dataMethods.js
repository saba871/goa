const fs = require("fs");

const readFile = (filePath) => {
    const data = fs.readFileSync("../data/tour.json", "utf-8");
    return data;
};

module.exports = { readFile };
