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
