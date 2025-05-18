const myForm = document.getElementById("user");
const input = document.getElementById("userNumber");

const randomNumber = Math.floor(Math.random() * 20) + 1;
let attampls = 0;
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    attampls ++;
    if (attampls === 10) {
        alert("You have reached the maximum attempts");
    }
    const userGuess = Number(input.value);
    if (userGuess > 20 || userGuess < 1) {
        alert("I said from 1 to 20");
        input.value = "";
        return;
    }
    if (userGuess === randomNumber) {
        alert("Congrats You won!");
    } else {
        alert("Try again!");
    }
    input.value = "";
});
