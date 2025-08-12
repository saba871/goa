const { readFile } = require("fs");
readFile("./document/file.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
});

readFile("./document/first.txt", "utf-8", (err, result) => {
    if (err) {
        console.log("File path is incorrect");
        return;
    }
    console.log(result);
});
