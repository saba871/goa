const myForm = document.querySelector("form");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (!email || !password) {
        alert("Please Fill out all fields");
        return;
    }
    if (email.length < 14) {
        alert("its too short");
    }
    console.log(`Email: ${email}`);
    console.log(`Passwork: ${password}`);

    e.target.reset();
});
