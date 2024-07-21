// // Task 1
// let name = 'Prabel'
// let age = 19

// let intro = `Hello, my name is ${name} and I am ${age} years old.`
// console.log(intro);

// // Task 2
// let multiLineStr = `This is multiline string.
// This is 2nd line.
// This is 3rd line.

// `
// console.log(multiLineStr);

// Task 3

// let numbers = [5, 2, 8 ,3];

// let [a, b] = numbers;

// console.log('a = ',a);
// console.log('b = ',b)

// Task 4

// let book = {
//     title: 'book1',
//     author: 'kunal'
// }

// let {title, author} = book

// console.log(title);
// console.log(author);

// Task 5

// let existngArray = [1,2,3,4]
// let addtionalArray = [5, 6, 7, 8, 9]

// let newArray = [ ...addtionalArray, ...existngArray]
// console.log(newArray);
 
// Task 6

// let sumAll = function(...numbers){
//     return numbers.reduce((acc, cur) => acc + cur, 0);
// }

// console.log(sumAll(1, 2, 3, 4, 5));

// // Task 7

// let multiply = function (num1, num2 = 2){
//     return num1 * num2
// }

// console.log(multiply(4, 5));
// console.log(multiply(5));

// // Task 8

// let name = 'rahul';
// const age  = 19;

// let person = {
//     name,
//     age
// }

// console.log(person);


// Task 9

const prop1 = 'firstName';
const prop2 = 'lastName';
const prop3 = 'age';

// Creating an object with computed property names
const person = {
  [prop1]: 'rahul',
  [prop2]: 'kunal',
  [prop3]: 12.4
};

console.log(person);
