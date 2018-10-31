// array.filer loc lọc dữ liệu từ 1 mảng cho trước developer kiểm tra các condition để lấy các item(s) như mong muốn
// this method will return type bolean (true or false)
// if equal true then item added into an array
// if equal false then item reject
// example

var numbers = [1, 2, 3, 4];

var resultTransform = numbers.filter(function(x) {
    console.log(x);
    return x % 2 === 0;
});

console.log(resultTransform);