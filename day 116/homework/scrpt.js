const myForm = document.querySelector("form");

const users = [];

class User {
    constructor(name, email, password) {
        this._name = name;
        this._email = email;
        this._password = password;
    }

    get name() {
        return this._name;
    }

    set password(newPass) {
        if (newPass.length > 4) {
            this._password = newPass;
        }
    }
}

const validateForm = () => {
    const name = myForm.name.value;
    const email = myForm.email.value;
    const password = myForm.password.value;

    if (!name || !email || !password) {
        alert("Please fill out all fields!");
        return;
    } else if (password.length <= 4) {
        alert("Password is too short!");
        return;
    }

    alert("Register is successful");
    users.push(new User(name, email, password));
    console.log(users);
    myForm.reset();
};

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    validateForm();
});
