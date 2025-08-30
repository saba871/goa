const morgan = require("morgan");
const express = require("express");
const dotEnv = require("dotenv");
const app = express();

dotEnv.config();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
    console.log("From Env:", process.env.NODE_ENV);
    console.log("Port:", process.env.PORT);
}

app.listen(process.env.PORT, () => {
    console.log(`Server is Running on port ${process.env.PORT}`);
});

console.log("Hello world");
