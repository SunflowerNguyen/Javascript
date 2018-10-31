// array.reduce trả về 1 kết quả duy nhất k phải là 1 mảng
// và tham số function callback trả về là 2 argument 

// var numbers = [1, 2, 3, 4];

// var result = numbers.reduce(function(x, y) {
//     console.log(x, y);
//     return x + y;
// });

// console.log(result);

var products = [
    { name: "A", quantity: 20, unitPrice: 100 },
    { name: "B", quantity: 25, unitPrice: 200 },
    { name: "C", quantity: 4, unitPrice: 400 },
];

// xu dung reduce tinh tong don hang

var rs = products.reduce(function(currentTotal, product) {
    return currentTotal + product.quantity * product.unitPrice;
}, 0); // 0 là giá trị khởi tạo xác định kiểu muốn trả về vd: total = ? 8600 (number)

// loop 1 : currentTotal = 0 , product = product[0]
//          0 + 20 *100 ;
console.log(rs);