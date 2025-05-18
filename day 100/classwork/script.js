// find index
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = array1.findIndex((num) => num % 2 == 0);
console.log(isLargeNumber);
// manual Find Index
const manualFindIndex = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return i;
    }
  }
};

// reduce ()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((acumultaor, newValue) => acumultaor + newValue);
console.log(sum);

// manual Reduce
const manualReduce = (arr, callback, startingValue) => {
  let accumulator = startingValue == undefined ? arr[0] : startingValue;

  for (let i = startingValue == undefined ? 1 : 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  }

  return accumulator;
};

// some
const manualSome = function (arr, callback) {
  let falseCount = 0;

  arr.forEach((value) => {
    if (callback(value) === false) {
      falseCount++;
    }
  });

  return falseCount !== arr.length;
};

// filter
const names = ["saba", "nika", "luka", "ani", "levani"];
const filtered = names.filter((name, index) => index % 2 == 0);
console.log(filtered);

// maped
const mixes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const maped = mixes.map((num, index) => (index % 2 == 0 ? num * 2 : num));
console.log(maped);
