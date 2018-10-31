// arrow function expression
// fat arrow

// c1
var sum3 = (a, b) => {
    return a + b;
}
console.log(sum3(4, 6));

// c2  ham chi co 1 dong tra ve no se hieu la return
var square = (x) => x * x;
console.log(square(5));

// c3 . neu chi co 1 tham so thi khong can ()
var sum4 = x => x * x;
console.log(sum4(6));

// c4  khong co tham so bat buoc phai co ()
var sum5 = () => {
    return 'The arrow function does not arguments';
}
console.log(sum5());

// === example

var calculatorSquarenumber = [2, 3, 4];

var result = calculatorSquarenumber.map(item => item * item);
console.log(result);


// diem khac biet giua arrow function expression voi normal function
// arrow functions is not a context
// khong co keyword this
// this se duoc lay tu function gan no nhat.

//==== function normal 

let a = {
    foo: 'bar',
    run: function() {
        setTimeout(function() {
            console.log(this.foo); // this.foo nay la 1 global context. chu k phai la local context
        }.bind(this), 2000); // nen phai bind(this) or bind(a) vao function tren. this day duoc hieu la object a.
    }
};
console.log(a.run());

//===== use arrow function
let arrow = {
    name: 'Sunflower',
    run: function() {
        setTimeout(() => {
            console.log('Hello,' + this.name);
        }, 2000);
    }
};

console.log(arrow.run());