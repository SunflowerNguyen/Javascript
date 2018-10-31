// 1. stringify - convert a object to a JSON string
// 2. parse - convert a JSON String to an object

var myDog = { name: 'Milu', age: 1 }

var myDogString = JSON.stringify(myDog);

var myDogObject = JSON.parse(myDogString);
console.log(myDog);
console.log(myDogString);
console.log(myDogObject);