const events = require("events");
const firstEvent = new events.EventEmitter();

// first
firstEvent.on("greet", (firstname) => {
    console.log(`Hello ${firstname}`);
});

firstEvent.emit("greet", "saba");

// second
const userJoined = new events.EventEmitter();

userJoined.on("join", (username) => {
    console.log(`User: ${username} has joined`);
});

userJoined.emit("join", "nika");
