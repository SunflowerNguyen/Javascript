var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, { encoding: 'utf8' }, function(err, data) {
            if (err) reject(err);
            resolve(data);
        });
    });
}

Promise.all([ // tham so nhan vao la 1 mang voi n promise
    readFilePromise('./test/text1.txt'),
    readFilePromise('./test/text2.txt')
]).then(function(values) { // return ve 1 mang da duoc resolve theo tung promise
    console.log(values);
}).catch(function(error) { // return error occured within any files.
    console.log(error);
});