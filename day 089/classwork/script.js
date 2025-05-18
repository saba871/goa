const user = (userName, userAge) => {
  userName = prompt("enter your name? ");
  userAge = prompt(parseInt("enter your age ? "));
  if (userAge >= 18) {
    return `${userName} you can go in apartment`;
  } else {
    return `${userName} you cannot go in apartment`;
  }
};
console.log(user());

// 1
const sum = (num1, num2) => {
  return num1 + num2;
};
console.log(sum(6, 7));

// 2
const positive = num => {
  if (num >= 0) {
    return true;
  } else {
    return false;
  }
};
console.log(positive(7));

// 3
const first = string => {
  return string[0];
};
console.log(first("saba"));

// 4
const st = randomNumber => {
  return randomNumber ** 2;
};
console.log(st(5));

// 5
const greet = name => {
  return `hello ${name}`;
};
console.log(greet("saba"));
