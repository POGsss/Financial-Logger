// Gtting All Input Tags
var inputs = document.querySelectorAll('input');
console.log(inputs);
// Cycle Tru Every Inputs
inputs.forEach(function (input) {
    console.log(input);
});
// Typescript Array
var arrayStr = ['John', 'Doe', 'Jane'];
// arrayStr.push(20); // Error
// arrayStr.push('Frankie'); // OK
var arrayNum = [1, 2, 3, 4, 5];
// arrayNum.push(20); // OK
// arrayNum.push('Frankie'); // Error
var arrayMix = ['John', 20, 'Doe', 30];
// arrayMix.push(20); // OK
// arrayMix.push('Frankie'); // OK
// Typescript Object
var objectPerson = {
    name: 'Frankie',
    age: 20,
    skills: ["Coding", "Designing", "Editing"]
};
// objectPerson.name = 'John'; // OK
// objectPerson.name = 20; // Error
// objectPerson.age = 20; // OK
// objectPerson.age = 'John'; // Error
// Explicitly Defined Variables
var variableStr; // String Variable
var variableNum; // Number Variable
var variableBool; // Boolean Variable
var arrayStr1; // Array of Strings
var objectPerson1; // Object
// Explicitly Defined Array
var arrayStr2; // Array of Strings
var arrayNum1; // Array of Numbers
var arrayMix1; // Array of Strings and Numbers
// Explicitly Defined Object
var objec1; // Object Type Defined
var object2; // Object Type Defined
var object3; // Object Strucure Defined
