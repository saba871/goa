// simple function
const variable = document.getElementById("text");
let current = 0;

function moveon() {
    variable.textContent = current;
    if (current % 2 == 0) {
        variable.className = "even";
    } else {
        variable.className = "odd";
    }
    current++;
}
// setInterval(moveon, 3000);