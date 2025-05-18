// 1.
class Person {
    constructor(firstName, lastName) {
        this._firstname = firstName;
        this._lastname = lastName;
    }
    think() {
        return `${this._firstname} is thinking`;
    }
}

class Student extends Person {
    constructor(firstName, lastName, gradeLevel) {
        super(firstName, lastName);
        this._gradeLevel = gradeLevel;
    }
    study(subject) {
        return `${this._firstname} is studying ${subject} and his/her grade is ${this._gradeLevel}`;
    }
}
const randomFunc = new Student("saba", "tabatadze", "A");
randomFunc.think();
randomFunc.study("math");
