import { User } from "./module/user.modul/js";
import { store, get } from "./database/localstorage";

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("first").value;
    const email = document.getElementById("second").value;

    const newValues = new User (name, email);
    store(newValues);

    console.log(get);
});
