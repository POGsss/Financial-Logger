// Gtting All Input Tags
var inputs = document.querySelectorAll('input');
console.log(inputs);
// Cycle Tru Every Inputs
inputs.forEach(function (input) {
    console.log(input);
});
// Typescript Array
var names = ['John', 'Doe', 'Jane'];
// names.push(20); // Error
// names.push('Frankie'); // OK
var numbers = [1, 2, 3, 4, 5];
// numbers.push(20); // OK
// numbers.push('Frankie'); // Error
var mixed = ['John', 20, 'Doe', 30];
// mixed.push(20); // OK
// mixed.push('Frankie'); // OK
// Typescript Object
var person = {
    name: 'Frankie',
    age: 20,
    skills: ["Coding", "Designing", "Editing"]
};
// person.name = 'John'; // OK
// person.name = 20; // Error
// person.age = 20; // OK
// person.age = 'John'; // Error
// Explicitly Defined Variables
var str; // String Variable
var ag; // Number Variable
var isStudent; // Boolean Variable
var skills; // Array of Strings
var student; // Object
// Explicitly Defined Array
var namesA; // Array of Strings
var numbersA; // Array of Numbers
var mixedA; // Array of Strings and Numbers
// Explicitly Defined Object
var object; // Object
var objectO; // Object
var objectOb; // Object
