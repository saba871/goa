const events = require("events");
const myEvents = new events.EventEmitter();
const secondEvents = new events.EventEmitter();

// submit
secondEvents.on("submit", () => {
    console.log("user has submit the button");
});

secondEvents.emit("submit");

// click
myEvents.on("click", (x, y) => {
    console.log("user has clicked the button");
    console.log(x * y);
});

myEvents.emit("click", 5, 6);
