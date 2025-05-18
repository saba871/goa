const {add, divide, multiply, minus} = require(`./math.js`);
console.log(add(3,6));
console.log(divide(9, 3));
console.log(minus(5, 4));
console.log(multiply(3, 4));


const {addProductToTheCart} = require(`./cart.js`);
console.log(addProductToTheCart("banana"));


const {roundTheNumber} = require(`./roundTheNumber.js`);
console.log(roundTheNumber(12.67));


const {greetUser} = require(`./greetUser.js`);
console.log(greetUser("saba"));
