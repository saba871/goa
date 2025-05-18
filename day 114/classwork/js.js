// for in
const car = {
    model: "Mercedes-Benz",
    type: "s",
    year: 2016,
};
const values = [];
for (const key in car) {
    values.push(car[key]);
    console.log(car[key]);
}
console.log(values);

// for of
let numbers = [1, 2, 3, 4, 5];
// for (const number of numbers) {
//     console.log(number);
// }
const [a, b, c, d, e] = numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(numbers);

const car2 = {
    model: "Mercedes-Benz",
    type: "s",
    year: 2016,
}
const {model: brend, type, year} = car2;
console.log(brend);
console.log(type);
console.log(year);
