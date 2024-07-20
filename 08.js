// Task 1
let name = 'jaypraksh'
let age = 19

let person = `Hello, my name is ${name} and I am ${age} years old.`
console.log(person);

// Task 2
let multiLineStr = `This is multiline string.
This is 2st line.
This is 3rd line.

`
console.log(multiLineStr);

// Task 3

let numbers = [1, 2, 3 ,4];

let [a, b] = numbers;

console.log(a);
console.log(b)

// Task 4

let book = {
    title: 'how to become coding expert',
    author: 'jaypraksh'
}

let {title, author} = book

console.log(title);
console.log(author);

// Task 5

let existngArray = [1,2,3,4]
let addtionalArray = [5, 6, 7, 8, 9]

let newArray = [...existngArray, ...addtionalArray]
console.log(newArray);
 
// Task 6

let sumAll = function(...numbers){
    return numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumAll(1, 2, 3, 4, 5));

// Task 7

let multiply = function (num1, num2 = 2){
    return num1 * num2
}

console.log(multiply(4, 5));
console.log(multiply(5));

// Task 8

let name2 = 'jay';
const age2  = 19;

let person2 = {
    name2,
    age2
}


// Task 9

const propName1 = 'firstName';
const propName2 = 'lastName';
const propName3 = 'age';

// Creating an object with computed property names
const person5 = {
  [propName1]: 'priya',
  [propName2]: 'Dey',
  [propName3]: 30
};

console.log(person5);
