const evens = (num) => {
  let evenNumber = [];

  for (let char = 0; char <= num; char++) {
    if (char % 2 == 0) {
      evenNumber.push(char);
    }
  }

  return evenNumber;
};
console.log(evens(10));

//
let count = 0;
const sumOfNumbers = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      count += array[i];
    }
  }

  return count;
};
console.log(sumOfNumbers([1, 2, 3, 4, 5]));

//
const longestString = (words) => {
  let longestWord = words[0];

  for (i = 1; i < words.length; i++) {
    if (longestWord.length < words[i].lenght) {
      longestWord = words[i];
    }
  }

  return longestWord;
};

//
for (let numbers = 5; numbers >= 0; numbers--) {
  console.log(numbers);
}

//
const sabasfriend = ['saba', 'luka', 'nika', 'vika'];
const lukasfriend = ['saba', 'nika', 'ani'];
const mutal = [];
for (i = 0; i < sabasfriend.length; i++) {
  for (j = 0; j < lukasfriend.length; j++) {
    if (sabasfriend[i] === lukasfriend[j]) {
      mutal.push(sabasfriend[i]);
    }
  }
}
console.log(mutal);