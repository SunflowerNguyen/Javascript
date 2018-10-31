// ...spread
// dung de trai? them cac phan tu vao 1 phan tu nao do
// co the la array co the la object

const a = [1, 3, 5, 6, 9];
const b = [0, ...a, 10, 11];
console.log(b);

// example

function sum(...args) { // use rest (gom lai thanh 1 mang)
    return args.reduce((sum, number) => sum * number, 1); // 1 - first value
}

console.log(sum(...a)); // use spread (trai 1 mang ra)