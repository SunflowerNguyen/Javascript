// scope la pham vi hoat dong 1 bien 
// global scope 
// local scope
// khi 1 ham duowc thuc thi -> tao ra scope moi.

var a = 1;

function random() {
    var b = Math.random();
    console.log(b);
}

console.log(a);
random();