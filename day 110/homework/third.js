const div = document.getElementById("box");
const btn = document.getElementById("change-box");

const digits = "012345678";
const hexSymbols = digits + "abcdef";

function generateRandomIndex(collection) {
    return parseInt(Math.random() * collection.length);
}

function generateRandomHex() {
    let result = "#";
    for (let i = 0; i < 6; i++) {
        const randomIndex = generateRandomIndex(hexSymbols);
        result += hexSymbols[randomIndex];
    }
    return result;
}

function generateRandomSize() {
    let result = "";
    for (let i = 0; i < 3; i++) {
        const randomIndex = generateRandomIndex(digits);
        result += digits[randomIndex];
    }
    return result + "px";
}

btn.addEventListener("click", () => {
    div.style.backgroundColor = generateRandomHex();
    div.style.width = generateRandomSize();
    div.style.height = generateRandomSize();
    div.style.borderRadius = generateRandomSize();
});
