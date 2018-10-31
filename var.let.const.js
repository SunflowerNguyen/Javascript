// var let const
// 1. declaration (khai bao bien)
// 2. hosting
// 3. block scope (if, for, ...)
// 4. reclaration (khai bao lai)
//===========================
// 1.
// dung var co the khai bao lai duoc bien | var a = 100; 
// let and var khong the khai bao lai duoc nhu var | let b = 200;const c = 3; => error

// var and let duoc khai bao bien k co gia tri | var a; let b; | const c; => error 
// const khi khai bao variable phai duoc gan gia tri | const c = 3;
var a = 1;
let b = 2;
const c = 3

console.log(a, b, c);

// 3.
// {} trong function la 1 scope
// var co the duoc hieu nhu la global
// let and const la mot local scope, duoc dung trong for
for (var i = 0; i < 5; i++) {
    console.log(i);
}
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// const khong duoc dung trong vong vong lap for vi no chi duoc khai bao 1 lan (bien khong doi )
for (const i = 0; i < 5; i++) { // ===> error
    console.log(i);
}

// 4. 
// var duoc phep khai bao lai
// let const khong duoc phep khai bao lai

// ======================================
// var khong tuan thu hieu ung block scope
// nen dung let and const