const myForm = document.querySelector(".my-form");
const text = document.getElementById("text");
const email = document.getElementById("email");
const password = document.getElementById("password");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const textValue = e.target.elements.text.value;
    const emailValue = e.target.elements.email.value;
    const passwordValue = e.target.elements.password.value;

    if (textValue === "" || emailValue === "" || passwordValue === "") {
        alert("Please fill out all fields.");
        return;
    }
    if (emailValue.length < 14) {
        alert("email is too short");
    }
    console.log(`Username: ${textValue}`);
    console.log(`Email: ${emailValue}`);
    console.log(`Pasword: ${passwordValue}`);

    e.target.reset();
});
// at მეთოდს ვიყენებთ იმისათვის რომ ამოვიღოთ სიიდან ელემენტი მარტივად
