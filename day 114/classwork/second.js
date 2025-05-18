// 1
const numbers = [1, 2, 3, 4]; // vqmnit masivs ricxvebit
const [first, second, third] = numbers; // first gautoldeba 1 - s
// second 2 - s xolo third 3 - s
console.log(numbers);

// 2
const person = {
    firstname: "saba",
    lastname: "tabatadze",
    age: 19,
};

const { firstname, lastname, age } = person;
console.log(person);

//
const thirdExsercise = { a: 5, b: 3, c: 2 };

const { a: num1, b: num2, c: num3 } = thirdExsercise;

console.log(num1, num2, num3);
