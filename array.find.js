// array.find chạy qua từng phần tử bất kì khi nào condition trả về là true thì method sẽ dừng lại và trả về kết quả 
// lưu ý: chỉ trả về 1 phần tử

var numbers = [1, 2, 3, 4];

var result = numbers.find(function(x) {
    console.log(x);
    return x % 2 === 0;
});

console.log('result: ' + result);