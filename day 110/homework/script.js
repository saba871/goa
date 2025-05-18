const button = document.getElementById("btn");
let result = ["random", "random1", "random2", "random3"];

button.addEventListener("click", () => {
    let index = Math.floor(Math.random() * result.length);
    let quote = result[index];

    document.getElementById("text").textContent = quote;
});
