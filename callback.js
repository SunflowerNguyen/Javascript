// callback function là 1 hàm có chứa các đoạn code trong hàm được truyền như 1 tham số của một hàm (function) và chờ để được gọi vào và thực thi

// For example

// hàm sẽ trả về 1 function với 3 tham số được định sẵn 
function sayHello(name, callback) {
    var myName = name + ", Hello";
    return callback(myName, 'argument2', 'argument3');
}

// hàm callback nhận vào các tham số trả về bên trên tuỳ ý muốn đặt tên 
var result = sayHello("Sunflower", function(a, b, c) {
    return a + ' - ' + b + ' - ' + c;
});

console.log(result);