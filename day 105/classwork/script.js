//
const second = document.body.children[1];
second.style.backgroundColor = "green";

const third = document.body.children[2];
third.innerHTML = "<b>Luka</b>";

const getElementByIdManual = function (id) {
  const children = document.body.children;

  for (let i = 0; i < children.length; i++) {
    if (children[i].id === id) {
      return children[i];
    }
  }
  return null;
};
console.log(getElementByIdManual("fir"));

//
const getElementsByClassName = function (className) {
  const func = document.body.children;
  const elements = [];

  for (let i = 0; i < func.length; i++) {
    if (func[i].className === className) {
      elements.push(func[i]);
    }
  }

  return elements.length === 1 ? elements[0] : elements;
};
console.log(getElementsByClassName("m"));

//
const first = document.querySelector("p");
console.log(first);

const second = document.querySelector("#thir");
console.log(second);

const third = document.querySelector(".m");
console.log(third);

//
const querySelectorManual = function (queryWord) {
  let randoms = ['one' , 'two' ,'three'];
  for (let i = 0; i < randoms.length; i++) {
    if (queryWord === randoms[i]) {
      return randoms[i]
    }
  }
  return []
};
console.log(querySelectorManual("three"));
