// console.log(document)
// to do list

const ul = document.getElementById("tasks");

const addTask = () => {
  const li = document.createElement("li");
  const btn = document.createElement("button");

  li.textContent = prompt("Add new Task: ");
  btn.textContent = "Delete task";

  btn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(btn);
  ul.appendChild(li);
};
