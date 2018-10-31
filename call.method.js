// call

function greeting(message) {
    return `${message}, ${this.name}. I am ${this.age} year old.`;
}

const person = {
    name: 'Sunflower',
    age: 27
}

console.log(greeting.call(person, 'Hello')); // arg1 is object -  arg2 is argument