class Mouse {
    constructor(name = 'Default') {
        this.name = name;
    }

    run() {
        return `${this.name} is running`;
    }
}

Mouse.prototype.sleep = function() {
    return `${this.name} is sleeping...`;
}

var mouse = new Mouse('Micy');


console.log(mouse.run());
console.log(mouse.sleep());