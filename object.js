// `new` keyword
// var today = new Date()

// Create a new object , oject literal (manual)
var mouse = {
    weight: 2,
    getWeight: function() {
        return this.weight;
    }
};

// Contructor function (ham xay dung doi tuong) New keyword
function Mouse(color) {
    this.type = 'mouse';
    this.color = color;
}

// Enhanced object
const name = 'Sunflower';
const cat = {
    name, // as like: name : name
    run() {
        return `${this.name} is running`; // as like run: function(){}
    }
}


var mouse1 = new Mouse('white');
var mouse2 = new Mouse('black');

console.log(mouse1);
console.log(mouse2);
console.log(cat.run());