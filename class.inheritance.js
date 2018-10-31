// inheritance 

class Animal {

    constructor(name = 'Cat') {
        this.name = name;
    }

    eat() {
        return `${this.name} is eating...`;
    }
}

class Bird extends Animal {

    getName() {
        return this.name;
    }
}

const chim = new Bird('Chim');

console.log(chim.getName());