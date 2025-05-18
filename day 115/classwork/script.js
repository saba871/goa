//
const greet = (num1, num2, ...names) => {
    console.log(num1);
    console.log(num2);
    console.log(names);
};
greet("saba", "luka", "ani", "luka", [1, 2, 3]);

//
const numbers = [1, 2, 3, 4, 5];

const [a, b, ...nums] = numbers;
const c = numbers.pop();

console.log(nums);
console.log(c);

console.log(Math.min(...numbers));
const result = ["start", ...numbers, "end"];

console.log(result);
