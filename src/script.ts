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
let variableStr: string; // String Variable
let variableNum: number; // Number Variable
let variableBool: boolean; // Boolean Variable
let arrayStr1: string[]; // Array of Strings
let objectPerson1: { name: string, age: number, isStudent: boolean, skills: string[] }; // Object

// Explicitly Defined Array
let arrayStr2: string[]; // Array of Strings
let arrayNum1: number[]; // Array of Numbers
let arrayMix1: (string | number)[]; // Array of Strings and Numbers

// Explicitly Defined Object
let objec1 : object; // Object Type Defined
let object2 : {}; // Object Type Defined
let object3: { name: string, age: number, isStudent: boolean, skills: string[] }; // Object Strucure Defined

// Dynamic Type In Typescript
let dynamicVariable: any; // Dynamic Variable
let dynamicArray: any[]; // Dynamic Array
let dynamicObject: { property: any }; // Dynamic Object