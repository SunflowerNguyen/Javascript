// array.map chuyển đổi 1 mãng đã cho thành 1 mảng khác do developer tuỳ thích

// example , calculator rectangles

var rectangles = [
    { with: 10, height: 5 },
    { with: 10, height: 20 },
    { with: 2, height: 4 },
    { with: 4, height: 5 }
];

// method .map will return every item within array rectangles
var resultTransform = rectangles.map(function(value, index, av) {
    console.log(value);
    return (value.height + value.with) * 2;
});

console.log(resultTransform);