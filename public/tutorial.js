"use strict";
// Gtting All Input Tags
const inputs = document.querySelectorAll('input');
console.log(inputs);
// Cycle Tru Every Inputs
inputs.forEach(input => {
    console.log(input);
});
// Typescript Array
let arrayStr = ['John', 'Doe', 'Jane'];
// arrayStr.push(20); // Error
// arrayStr.push('Frankie'); // OK
let arrayNum = [1, 2, 3, 4, 5];
// arrayNum.push(20); // OK
// arrayNum.push('Frankie'); // Error
let arrayMix = ['John', 20, 'Doe', 30];
// arrayMix.push(20); // OK
// arrayMix.push('Frankie'); // OK
// Typescript Object
let objectPerson = {
    name: 'Frankie',
    age: 20,
    skills: ["Coding", "Designing", "Editing"]
};
// objectPerson.name = 'John'; // OK
// objectPerson.name = 20; // Error
// objectPerson.age = 20; // OK
// objectPerson.age = 'John'; // Error
// Explicitly Defined Variables
let variableStr; // String Variable
let variableNum; // Number Variable
let variableBool; // Boolean Variable
let arrayStr1; // Array of Strings
let objectPerson1; // Object
// Explicitly Defined Array
let arrayStr2; // Array of Strings
let arrayNum1; // Array of Numbers
let arrayMix1; // Array of Strings and Numbers
// Explicitly Defined Object
let objec1; // Object Type Defined
let object2; // Object Type Defined
let object3; // Object Strucure Defined
// Dynamic Type In Typescript
let dynamicVariable; // Dynamic Variable
let dynamicArray; // Dynamic Array
let dynamicObject; // Dynamic Object
// Functions In Typescript
const func = () => {
    console.log('This is void function');
};
const func1 = () => {
    return 'This is string function';
};
func(); // This is void function
console.log(func1()); // This is string function
// Functions With Parameters
const func2 = (name, age) => {
    console.log(`Name: ${name}, Age: ${age}`);
};
const func3 = (name, age, skills) => {
    return `Name: ${name}, Age: ${age}, Skills: ${skills}`;
};
const func4 = (name, age, skills = 'Coding') => {
    return `Name: ${name}, Age: ${age}, Skills: ${skills}`;
};
func2('John', 20); // Name: John, Age: 20
console.log(func3('John', 20, 'Coding')); // Name: John, Age: 20, Skills: Coding
console.log(func4('John', 20)); // Name: John, Age: 20, Skills: Coding
const func5 = (uid, user) => {
    console.log(`User ID: ${uid}, User: ${user}`);
};
func5(20, { name: 'John', age: 20, skills: ['Coding', 'Designing'] });
// Function Signature
// Example 1
let greet;
greet = (name, age) => {
    console.log(`Name: ${name}, Age: ${age}`);
};
greet('John', 20);
// Example 2
let calc;
calc = (num1, num2, action) => {
    switch (action) {
        case 'add':
            return num1 + num2;
        case 'sub':
            return num1 - num2;
        case 'mul':
            return num1 * num2;
        case 'div':
            return num1 / num2;
        default:
            return 0;
    }
};
console.log(calc(10, 5, 'add')); // 15
// Example 3
let logDetails;
logDetails = (uid, user) => {
    console.log(`User ID: ${uid}, User: ${user}`);
};
// DOM And Type Casting
