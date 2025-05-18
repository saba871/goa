const correctPass = "saba123";
const enteredPass = "saba123";

const checkpassword = new Promise((resolve, reject) => {
    if (correctPass === enteredPass) {
        resolve("Access granted");
    } else {
        reject("Access Denied, Try again later");
    }
});
checkpassword
    .then((message) => {
        console.log(message);
    })
    .catch((message) => {
        console.log(message);
    });

//
const cartItems = ["apple", "banana", "orange", "grapes"];
const requestedItem = "apple";

const shoppingCart = new Promise((resolve, reject) => {
    if (cartItems.includes(requestedItem)) {
        resolve(`${requestedItem} is available at the moment`);
    } else {
        reject(`Sorry, we don't have the ${requestedItem}`);
    }
});

shoppingCart
    .then((message) => {
        console.log(message);
    })
    .catch((message) => {
        console.log(message);
    });

//
const alarm = new Promise((resolve, reject) => {
    const currenttime = new Date().getHours();
    const wakeuptime = 7;
    if (currenttime === wakeuptime) {
        resolve("wake up time");
    } else {
        reject("You can sleep a bit longer");
    }
});
alarm
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
