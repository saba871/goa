const registrationForm = document.querySelector("#registration");
const signIn = document.querySelector("#signin");

const users = [];

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digits = "0123456789";
const punctuationChars = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;

// log in
function isValidPassword(pass) { // vadzlevt mnishvnelobas false da trues gaxdomis shemtxvevashi moxdes ragac 
    const hasAlphabet = false;
    const hasDigits = false;
    const hasPunctuationChars = false;

    // vuvlit pass da vamowmebt include metodit sheicavs tu ara romelisme simbolos tu sheucavs false gaxdeba true
    for (let i = 0; i < pass.length; i++) {
        if (alphabet.includes(pass[i])) {
            hasAlphabet = true;
        } else if (hasDigits.includes(pass[i])) {
            hasDigits = true;
        } else if (hasPunctuationChars.includes(pass[i])) {
            hasPunctuationChars = true;
        }
    }
    return hasAlphabet && hasDigits && hasPunctuationChars;
}

// registraciis dadasturebis shemdeg validacia
registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userExsist = users.find(
        (user) => user.email == registrationForm.email.value
    );

    if (!isValidPassword(registrationForm.newPassword.value)) {
        alert(
            "Password must contain one digit one punctuationChars and alphabet"
        );
        registrationForm.reset();
        return;
    }

    if (
        registrationForm.newPassword.value !=
        registrationForm.repeatPassword.value
    ) {
        alert("your repaeted password is incorrect");
        registrationForm.reset();
        return;
    }

    const user = {
        email: registrationForm.form.value,
        pass: registrationForm.form.value,
    };

    users.push(user);
    registrationForm.reset();
});

// sign in
signinForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = signinForm.email.value;
    const password = signinForm.password.value;

    const regist = signinForm.find((user) => user.email == email && user.pass == password);

    if (regist) {
        alert("correct sign in operation")
    } else {
        alert("incorect sign in operation")
    }
    signinForm.reset();
});
