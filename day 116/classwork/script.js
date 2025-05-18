class User {
    constructor(email, password, userName) {
        this._email = email;
        this._password = password;
        this._userName = userName;
    }

    get email() {
        return this._email;
    }

    set password(pass) {
        if (pass.length > 6 && pass.length < 20) {
            this._password = pass;
        }
    }
}

const user1 = new User("tabo@gmail.com", "saba", "sabatabatadze");

console.log(user1);

// class არის ერთგვარი ქარხანა გეგმა რომლითაც ვქმნით რაიმეს
// პროტოტიპი არის საერთო გეგმა ჩემს ქარხანაში
