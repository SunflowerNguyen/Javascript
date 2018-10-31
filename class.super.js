// method overriding  

class Animal {

    constructor(name = 'Cat', age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating...`;
    }
}

class Bird extends Animal {
    constructor(name, age, address) {
        super(name, age);
        this.address = address; // super variable interal
    }

    eat() {
        super.eat(); // super method function
        return 'I am still have hungry';
    }

}

const chim = new Bird('Chim', 15, 'TP Ho Chi Minh');

console.log(chim.eat());