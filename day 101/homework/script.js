// 1.
let first = 0;
let second = 0;
const user = () => {
  first = Number(prompt("Enter first number:"));
  second = Number(prompt("Enter second number:"));
};

let sms = document.getElementById("count");

const ctn = () => {
  if (first !== undefined && second !== undefined) {
    let result = first + second;
    sms.textContent = result;
  }
};

// 2.
const myUl = document.getElementById("ul-1");
const favoriteMovies = [];

for (let i = 0; i < 5; i++) {
  let movies = prompt(`Enter your favorite movie ${i + 1}:`);
  if (movies) {
    favoriteMovies.push(movies);
  }
}

favoriteMovies.forEach((curValue) => {
  const li = document.createElement("li");
  li.textContent = curValue;
  myUl.appendChild(li)
});
