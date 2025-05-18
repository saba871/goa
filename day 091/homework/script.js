// shift
const list = [1, 2, 3, 4, 5];
list.shift();
console.log(list);

const list2 = ["saba", "nika", "luka"];
list2.shift();
console.log(list2);

const list3 = ["bmw", "mecedes", "audi"];
list3.shift();
console.log(list3);

// unshift
const random = [2, 3, 4, 5];
random.unshift(1);
console.log(random);

const random2 = ["luka", "nika"];
random2.unshift("saba");
console.log(random2);

const random3 = ["bmw", "mercedes"];
random3.unshift("audi");
console.log(random3);

// slice
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const mix = fruits.slice(2, 4);
console.log(mix);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array = numbers.slice(3, 6);
console.log(array);

const cars = ["bmw", "mercedes", "audi", "porshe", "lamborgini"];
const min = cars.slice(2, 5);
console.log(min);

// splice
const variable = ["Banana", "Orange", "Apple", "Mango"];
variable.splice(1, 2, "kiwi", "kakao");
console.log(variable);

const variable2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
variable2.splice(2, 3, 10, 11);
console.log(variable2);

const arr = ["a", "b", "c", "d"];
const removed = arr.splice(1, 2);
console.log(arr);
console.log(removed);

// indexOf
let joe = [10, 20, 30, 40, 50];
console.log(joe.indexOf(40));
console.log(joe.indexOf(120));

let margiela = ["bmw", "mecrdes", "audi", "porshe"];
console.log(margiela.indexOf(30));
console.log(margiela.indexOf("bmw"));

let tom = [1, 2, 3, 4, 5];
console.log(tom.indexOf(4));

// join
let jerry = [1, 2, 3, 4, 5];
console.log(jerry.join(" "));

let cvladi = ["bmw", "mercedes", "audi"];
console.log(cvladi.join(","));

let bolo = ["saba", "luka", "nika"];
console.log(bolo.join(":"));

// concat
let text1 = "saba ";
let text2 = "tabatadze";
let result = text1.concat(text2);
console.log(result);
