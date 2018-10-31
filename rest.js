// rest
// duoc hieu la nhung tham so con lai duoc truyen vao ma minh khong biet duoc la co bnhiu 
// ...arg2 se tra ve 1 mang cac tham so minh muon biet
// luon luon duoc dat o cuoi

// khac vs arguments
// rest tra ve la 1 array
// arguments tra ve 1 object (array-like object)

function log(...args) {
    console.log(args);
    console.log(arguments);
};

log(1, 2, 3, 4, 5);

// example 1
function sum(...nums) {
    return nums.reduce((total, number) => total + number, 0) // arrow function thuc thi 1 dong

    // return nums.reduce(function(total, number) {
    //     return total + number;
    // }, 0);
};
console.log(sum(6, 4, 3, 2, 23, 5, 21));

// example 2

function concat(separator, ...strings) {
    return strings.join(separator);
}

console.log(concat('.', 'a', 'b', 'c', 'd'));