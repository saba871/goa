class Animal {
    constructor(weight, color, age) {
        this._weight = weight;
        this._color = color;
        this._age = age;
    }
    get eat() {
        return `is eating`;
    }
    get drink() {
        return "is drinking";
    }
}

class Dog extends Animal {
    constructor(weight, color, age, random) {
        super(weight, color, age);
        this._random = random;
    }
    walk() {
        console.log("is moving");
    }

    bark() {
        console.log("is barking");
    }
}
