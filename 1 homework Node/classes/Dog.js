class Dog {
    constructor(firstname, breed, age) {
        this.firstname = firstname;
        this.breed = breed;
        this.age = age;
    }
    ShowDog() {
        console.log(`Name: ${this.firstname} Breed: ${this.breed} Age: ${this.age}`);
    }
}

module.exports  = Dog;