//
function fun(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function manualfilter(array, fun) {
  const filteredArr = [];

  for (let i = 0; i < array.length; i++) {
    if (fun(num) == true) {
      filteredArr.push(i);
    }
  }
  return filteredArr;
}

console.log(manualfilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], fun));

//
function changer(num) {
  return num * 2;
}
function manualMap(arr, changer) {
  const changedArr = [];
  for (let i = 0; i < arr.length; i++) {
    changedArr.push(changer(arr[i]));
  }
  return changedArr;
}
console.log(manualMap([1, 2, 3, 4, 5], changer));

//
const humans = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 12 },
  { name: "David", age: 14 },
  { name: "Emma", age: 16 },
  { name: "Frank", age: 25 },
  { name: "Grace", age: 30 },
  { name: "Hannah", age: 27 },
  { name: "Ian", age: 45 },
  { name: "Jack", age: 38 },
];

const manualFilter = (arr, checker) => {
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (checker(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
};

const result = manualFilter(humans, function (human) {
  return human.age < 18;
});

// მაღალი რიგის ფუნქციებია ის ფუნქციები რომელსაც არგუმენტად მას ფუნქციას გადავცემთ
//
