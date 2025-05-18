class Dog {
    constructor(name, age) {
        this._name = name;
        this._age = age;
        this._energyLevel = 100;
    }
    run() {
        this._energyLevel -= 10;
        console.log(
            `Dog named ${this._name} is now running which means that it has lost 10 energy and its energy level now is ${this._energyLevel}`
        );
    }
    reset() {
        this._energyLevel += 5;
        console.log(
            `Dog named ${this._name} is now resting which means that its energy level is now ${this._energyLevel}`
        );
    }
    showStatus() {
        console.log(
            `Dog Name: ${this._name}, Age: ${this._age}, Energy Level: ${this._energyLevel}`
        );
    }
}
const randomDog = new Dog("jina", 2);
randomDog.run();
randomDog.reset();
randomDog.showStatus();
