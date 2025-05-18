// 2
function applyToEach(array, callback) {
  const double = [];
  for (let i = 0; i < array.length; i++) {
    double.push(callback(array[i]));
  }
  return double;
}
function callback(num) {
  return num * 2;
}

// 3
function filterAdults(arr, callback) {
  return arr.filter(callback);
}
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
];
const filtered = filterAdults(people, (person) => person.age >= 18);
console.log(filtered);

// 4
function sumAges(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].age;
  }
  return sum;
}
const humans = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
];
const result = sumAges(humans);
console.log(result);

// 5
function findOldest(arr) {
  let oldest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].age > oldest.age) {
      oldest = arr[i];
    }
  }
  return oldest;
}
const ages = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
];
const old = findOldest(ages);
console.log(old);

// 6 - erorr
function logNames(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i].nam);
  }
}
const names = [
  { nam: "Alice", age: 25 },
  { nam: "Bob", age: 17 },
  { nam: "Charlie", age: 30 },
];

// 7 erorr
function formatPeople(arr, callback) {
  let formattedArray = [];
  for (let i = 0; arr.length; i++) {
    formattedArray.push(callback(arr[i]));
  }
  return formattedArray;
}
const allInOne = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
];

// 9
function areAllAdults(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age >= 18) {
      result.push(arr[i].name);
    }
  }

  callback(result);
}

const adults = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
];

areAllAdults(adults, function (adults) {
  console.log(adults);
});

// 10
function findYoungest(arr, callback) {
  let youngest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    youngest = callback(youngest, arr[i]);
  }
  return youngest;
}
const younest = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
];

const youngest = findYoungest(people, (youngest, person) =>
  person.age < youngest.age ? person : youngest
);

console.log(youngest);
