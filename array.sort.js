// array.sort sắp xếp lại 1 mảng theo thứ tự theo 1 column nào đó trong. và thay dổi thứ tự của mảng gốc 

// example: a = 3 , b = 4
// returns a less than 0            --- a will come before b
// returns a greater than > 0       --- a will come after b
// returns a equal 0                --- a and b will stay unchanged

var numbers = [1, 2, 3, 4, 6, 5, 7, 9, 8];

numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers); // ascending numbers 

numbers.sort(function(a, b) {
    return b - a;
});

console.log(numbers); // descending numbers