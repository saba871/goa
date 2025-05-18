const input = document.getElementById("input");
const button = document.getElementById("btn");
const list = document.getElementById("list");

button.addEventListener("click", () => {
    const text = input.value;
    if (text === "") {
        alert("Enter any Task: ");
        return;
    }
    const li = document.createElement("li");
    li.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "20px";

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = "";
});