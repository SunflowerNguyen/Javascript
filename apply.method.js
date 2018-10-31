// apply
// hoat dong nhu method call
// nhan vao 1 array or array-like object

function greeting(arg1, arg2) {
    console.log(arg1);
    console.log(arg2);
    return `${arg2}, ${this.name}. I am ${this.age} year old.`;
}

const person = {
    name: 'Sunflower',
    age: 27
}

console.log(greeting.apply(person, ['Hello', 'Hi'])); // arg1 is object -  arg2 is an array