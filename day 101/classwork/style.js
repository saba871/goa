// alert("hello world");
const myP = document.getElementById("my-p");

let num = 0;
const increment = () => {
  num++;
  myP.textContent = num;
};

const decrement = () => {
  num--;
  myP.textContent = num;
};
