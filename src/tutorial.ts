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

// Functions In Typescript
const func = (): void => {
  console.log('This is void function');
}
const func1 = (): string => {
    return 'This is string function';
}

func(); // This is void function
console.log(func1()); // This is string function

// Functions With Parameters
const func2 = (name: string, age: number): void => {
    console.log(`Name: ${name}, Age: ${age}`);
}
const func3 = (name: string, age: number, skills?: string | number): string => {
    return `Name: ${name}, Age: ${age}, Skills: ${skills}`;
}
const func4 = (name: string, age: number, skills: string | number = 'Coding'): string => {
    return `Name: ${name}, Age: ${age}, Skills: ${skills}`;
}

func2('John', 20); // Name: John, Age: 20
console.log(func3('John', 20, 'Coding')); // Name: John, Age: 20, Skills: Coding
console.log(func4('John', 20)); // Name: John, Age: 20, Skills: Coding

// Type Aliases
type stringOrNumber = string | number;
type objType = { name: string, age: number, skills: string[] };
type funcType = (name: string, age: number) => void;

const func5 = (uid: stringOrNumber, user: objType): void => {
    console.log(`User ID: ${uid}, User: ${user}`);
}

func5(20, { name: 'John', age: 20, skills: ['Coding', 'Designing'] });

// Function Signature
    // Example 1
    let greet: (name: string, age: number) => void;
    greet = (name: string, age: number) => {
        console.log(`Name: ${name}, Age: ${age}`);
    }
    greet('John', 20);

    // Example 2
    let calc: (num1: number, num2: number, action: string) => number;
    calc = (num1: number, num2: number, action: string) => {
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
    }
    console.log(calc(10, 5, 'add')); // 15

    // Example 3
    let logDetails: (uid: stringOrNumber, user: objType) => void;
    logDetails = (uid: stringOrNumber, user: objType) => {
        console.log(`User ID: ${uid}, User: ${user}`);
    }

// DOM And Type Casting