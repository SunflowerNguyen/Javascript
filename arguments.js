// arguments
// la 1 array-like object co chua key = length

function sum() {
    // console.log(arguments); // show all arguments
    // console.log(arguments.length); // show length elements number within object

    const result = Array.from(arguments); // ham nay chuyen 1 array-like object to an array

    return result.reduce(function(sum, currentNumber) {
        return sum + currentNumber;
    }, 0);

    return result;

    // let total = 0;
    // for (let i = 0; i < arguments.length; i++) {
    //     total += arguments[i];
    // }
    // return total;
}

console.log(sum(1, 2, 3, 4));