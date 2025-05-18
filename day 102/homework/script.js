// 1
// getElementsByClassName ვიყენებთ მაშინ როდესაც გვინდა გვინდა რომელიმე ელემენტის წამოღება მიდი კლასის მიხედვით
// getElementsByTagNam ვიყენებთ მაშინ როდესაც გვინდა რომ ელემენტი წამოვიღოთ თაგის სახელით

// 2
const random = document.getElementsByTagName("p");
for (let i = 0; i < 5; i++) {
  const btn = document.createElement("button");
  btn.textContent = "Delete";

  btn.addEventListener("click", () => {
    random[i].remove();
  });
  random[i].appendChild(btn);
}

// 3
const elements = document.getElementsByClassName("h1");

if (elements.length > 1) {
  elements[1].textContent = "meotxe";
}
