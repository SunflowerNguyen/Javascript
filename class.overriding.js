// method overriding  

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

    eat() {
        return `${this.name} ate done 5 minutes ago. (method overriding) `;
    }
}

const chim = new Bird('Chim');

console.log(chim.eat());