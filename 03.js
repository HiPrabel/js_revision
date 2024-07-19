// let num = 12

// if (num < 0) {
//     console.log('number is -ve');
// } else if (num === 0){
//     console.log('number is 0');
// } else {
//     console.log('number is +ve');
// }

// let age = 17

// if (age < 18) {
//     console.log('you are not eligible to vote');
// } else {
//     console.log('you are eligible to vote');
// }

// let n1 = 3
// let n2 = 1
// let n3 = 2

// if (n2 < n1 && n3 < n1 ) {
//     console.log(`${n1} is the largest`);
// } else if(n1 < n2 && n3 < n2) {
//     console.log(`${n2} is the largest`);
// } else {
//     console.log(`${n3} is the largest`);
// }

// let num = 7

// switch (num) {
//     case 1:
//         console.log('Sunday');
//         break;
//     case 2:
//         console.log('Monday');
//         break;
//     case 3:
//         console.log('Tuesday');
//         break;
//     case 4:
//         console.log('Wednesday');
//         break;
//     case 5:
//         console.log('Thursday');
//         break;
//     case 6:
//         console.log('Friday');
//         break;
//     default:
//         console.log('Saturday');
//         break;
// }

// let score = 51;
// let grade;

// switch (true) {
//     case (score < 35):
//         grade = 'F';
//         break;
//     case (score >= 35 && score <= 49):
//         grade = 'D';
//         break;
//     case (score >= 50 && score <= 74):
//         grade = 'C';
//         break;
//     case (score >= 75 && score <= 89):
//         grade = 'B';
//         break;
//     default:
//         grade = 'A';
//         break;
// }

// console.log(grade);

// let num = 5

// console.log(num % 2 == 0 ? 'even' : 'odd');


let year = 4; 

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}
