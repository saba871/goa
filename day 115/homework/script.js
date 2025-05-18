const array1 = [1, 2, 3, 4, 5]; // frist
const array2 = [6, 7, 8, 9, 10];
const array3 = [...array1, ...array2];
console.log(array3);

const userObj = {
    // second
    firstName: "saba",
    lastName: "tabatadze",
    age: 19,
};
const { firstName, lastName, age } = userObj;
console.log(firstName);
console.log(lastName);
console.log(age);

// third
const secondObj = {
    first: "saba",
    last: "tabatadze",
    age: 19,
    hobby: "writing code",
};
const { first, last, ...random } = secondObj;
console.log(first);
console.log(last);

// randrom function
function findMax(...numbers) {
    return Math.max(...numbers);
}
console.log(findMax([1, 2, 3, 4, 5]));
