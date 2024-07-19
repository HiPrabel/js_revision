function add(n1, n2){
    return n1 + n2
}

function sub(n1, n2){
    return n1 - n2
}

function mul(n1, n2){
    return n1 * n2
}

function div(n1, n2){
    return n1 / n2
}

function rem(n1, n2){
    return n1 % n2
}

console.log(add(10, 5));
console.log(sub(10, 5));
console.log(mul(10, 5));
console.log(div(10, 5));
console.log(rem(10, 5));

let one = 1
console.log(one);
one += 5
console.log(one);
one -= 10
console.log(one);

let two = 2
let three = 3
console.log(two > three);
console.log(two < three);
console.log(two <= three);
console.log(two >= three);
console.log(two == three);
console.log(two === three);

let four = 4
let four2 = '4'
console.log(four == four2);
console.log(four === four2);

let num = 2
if(num > two && num < four){
    console.log('num is in between 2 and 4');
}

if(one < two || one < three){
    console.log('one is less than two or it is less than three');
}

let sunny = false
if(!sunny){
    console.log('avoid a trip');
} else {
    console.log('you can plan a trip');
}

num = -5
console.log( num >= 0 ? 'num is +ve num' : 'num is -ve number');
num >= 0 ? console.log('num is +ve num') : console.log('num is -ve number')