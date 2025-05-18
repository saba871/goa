// first project in js
let kelvin = 293;
// kelvin valirable
let celsius = kelvin - 273;
let fahrenheit = celsius * (9 / 5) + 32;
console.log("Temperature in Celsius:", celsius);
console.log("Temperature in Fahrenheit:", fahrenheit);


// second project
let myAge = 18;
// myAge variable: ჩემი ასაკი

let earlyYears = 2; // ძაღლის ასაკი 

earlyYears *= 10.5; // პირველი 2 წელი ძაღლის ცხოვრებაში ითვლება როგორც 10.5 ამიტომ ვამრავლებთ 
let laterYears = myAge - 2;
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;

let myName = "saba".toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
