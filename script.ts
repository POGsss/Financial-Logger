// Gtting All Input Tags
const inputs = document.querySelectorAll('input');
console.log(inputs);

// Cycle Tru Every Inputs
inputs.forEach(input => {
  console.log(input);
});

// Typescript Array
    let names = ['John', 'Doe', 'Jane'];
    // names.push(20); // Error
    // names.push('Frankie'); // OK
    let numbers = [1, 2, 3, 4, 5];
    // numbers.push(20); // OK
    // numbers.push('Frankie'); // Error
    let mixed = ['John', 20, 'Doe', 30];
    // mixed.push(20); // OK
    // mixed.push('Frankie'); // OK

// Typescript Object
    let person = {
        name: 'Frankie',
        age: 20,
        skills: ["Coding", "Designing", "Editing"]
    };
    // person.name = 'John'; // OK
    // person.name = 20; // Error
    // person.age = 20; // OK
    // person.age = 'John'; // Error

// Explicitly Defined Variables
let str: string;
let ag: number;
let isStudent: boolean;
let skills: string[];
let student: { name: string, age: number, isStudent: boolean, skills: string[] };