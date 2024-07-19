// Task 1

// function isEven (n) {
//     return (n % 2 == 0)
// }
// console.log(isEven(7));

// Task 2

// function sqr (n) {return n*n}
// console.log(sqr(4));

// Task 3

// function maxi (n1, n2) {
//     return ((n1 > n2) ? n1 : n2)
// }
// console.log(maxi(-2,-4));

// Task 4

// function concatenate (s1, s2) {
//     return (s1 + s2)
// }
// console.log(concatenate('as', 'df'));

// Task 5

// const add = (n1, n2) => n1+n2
// console.log(add(2, -7));

// Task 6

// const isPresent = (string, char) => {
//     for (let i = 0; i < string.length; i++) {
//         if (char == string[i]) return true
//     }
//     return false
// }
// console.log(isPresent('apple', 'p'));

// Task 7

// function product (n1, n2 = 3) {
//     return n1 * n2
// }
// console.log(product(2));

// Task 8

// function greet (name, age = 20) {
//     return (`hello, ${name} are you ${age} years old ?`)
// }
// console.log(greet('rahul', 12));

// function greet (name, age = 20) {
//     console.log(`hello, ${name} are you ${age} years old ?`);
// }
// greet('rahul', 12);

// Task 9

// function repeat(func, times) {
//   for (let i = 0; i < times; i++) {
//     func();
//   }
// }

// function sayHello() {
//   console.log("Hello ");
// }

// repeat(sayHello, 3); 

// Task 10

function main1(func1, func2, value) {
  return func2(func1(value));
}
function addOne(x) {
  return x + 1;
}
function square(x) {
  return x * x;
}

const result = main1(addOne, square, 4); 
console.log(result);