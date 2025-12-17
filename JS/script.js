// const myButton = document.getElementById('myButton');
// const sum = document.getElementById('sum');

// myButton.onclick = function() {
//     const random = Math.floor(Math.random() * 100 + 1)
//     const random2 = Math.floor(Math.random() * 100 + 1)
//     let a = random;
//     let b = random2;
//     sum.textContent = `Sum: ${a + b}`;
// }

// Variable declarations and data types
let userName = `Art`
let userAge = 17
let isStudent = true
console.log(`User Name: ${userName}, Age: ${userAge}, Is student: ${isStudent}`);

// String interpolation
let firstName = `Jane`
let lasstName = `Doe`
console.log(`Full Name: ${firstName} ${lasstName}`)

// Basic arithmetic operations
let num1 = 10
let num2 = 5

console.log(`Addition: ${num1 + num2}`);
console.log(`Subtraction: ${num1 - num2}`);
console.log(`Multiplication: ${num1 * num2}`);
console.log(`Division: ${num1 / num2}`);

// Type checking
let testValue = 67
console.log(typeof testValue)

// Conditional statements
let checkNumber = 69
if (checkNumber % 2 === 0) {
    console.log(`${checkNumber} is even`);
}
else {
    console.log(`${checkNumber} is odd`);
}

// Ternary operator
let age = 20
if (age >= 18) {
    console.log(`You can vote`)
}
else {
    console.log(`You cannot vote`)
}

// Using ternary operator
age >= 18 ? console.log(`You can vote`) : console.log(`You cannot vote`)

// Equality vs. Strict Equality
let temp1 = 5
let temp2 = `5`
temp1 === temp2 ? console.log(`Equal`) : console.log(`Not equal`)

// Loops
for (let i=1; i <=10; i++) {
    console.log(i);
}

// While loop
let count = 5
while (count >= 1) {
    console.log(count);
    count--;
}

// Sum from 1 to 50
let total = 0
for (let i=1; i <= 50; i++) {
    total += i
}
console.log(`Total sum from 1 to 50 is: ${total}`)

// Using continue 
for (let i=1; i <= 10; i++) {
    if (i === 7) {
        continue
    }
    console.log(i)
}

// Using break
for (let i=1; i <= 20; i++) {
    if (i === 15) {
        break
    }
    console.log(i)
}

// greeting function
const greetings = function(name) {
    console.log(`Hello, ${name}!`);
}
greetings(`Mark`)

// calculate area function
const calculateArea = function(length, width) {
    console.log(`Area: ${length * width}`);
}
calculateArea(5, 8)

// arrow function
const arrowCalcArea = (lenght, width) => {
    console.log(`Area: ${length * width}`);
}

// function scope 

const localScope = function() {
    let localMessage = `Local`
}
// console.log(localMessage); //Eror: LocalMessage is not defined, it is inside the function scope, not global scope

// default parameter
const power = function(base, exponent = 2) {
    console.log(`Result: ${base ** exponent}`)
}
power(4)

// Array Declaration & Access:
let colors = ['red', 'green', 'blue']
console.log(colors)
console.log(colors[1])

// Adding to Array
colors.push('yellow')
console.log(colors)

// Array Iteration
let numbers  = [2, 4, 6, 8, 10]
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

// Array sum
let sumNumbers = 0
for (let i = 0; i < numbers.length; i++) { 
    sumNumbers += numbers[i]
    console.log(`Sum: ${sumNumbers}`)
}

// Finding Largest
let data = [34, 67, 69, 13, 52]
let largest = data[0] 
for (let i = 1; i < data.length; i++) { 
    if (data[i] > largest) { 
        largest = data[i]
    } 
}
console.log(`Largest number is: ${largest}`)

// Array of objects
let books  = [
    {title: 'Book One', pages: 67},
    {title: 'Book Two', pages: 69},
]
console.log(books[1].title)
