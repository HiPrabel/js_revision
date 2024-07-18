// task 1
let arr1 =[1,2,3,4,5]

console.log(arr1);

// task 2:
console.log("First Element", arr1[0]);
console.log("Last element",arr1[arr1.length-1]);

// task 3: 
arr1.push(6)
console.log("push ",arr1);

//task 4:
arr1.pop(4)
console.log("pop ",arr1);

// task 5:
arr1.shift()
console.log("shift ",arr1);

// task 6:
arr1.unshift(7)
console.log("unshift ",arr1);

// task 7:
let arr2 = arr1.map((data)=>data*2);
console.log("Array 2 after map (array 1 is doubled):",arr2)

// task 8:
let arr3 = arr1.filter((data)=> data%2===0)
console.log("Array 3 after filter even numbers of array 1:",arr3)

// task 9:

let sumOfArr1 = arr1.reduce((acc,cur)=> acc+cur,0)
console.log("Sum Of Array 1 elements by using reduce:",sumOfArr1)

// task 10:
for(let i=0; i<arr1.length; i++){
    console.log("Element", i+1, "array 1 is:", arr1[i]);
}

// task 11:
arr1.forEach(element => {
    console.log("Element of Array 1 by using foreach", element)
});

// task 12:
let mat1=[[1,2,3],[4,5,6],[7,8,9]];
console.log("Matrix 1:", mat1)

// task 13: 
for(let i=0; i<mat1.length; i++){
    for(let j=0; j< mat1[0].length; j++){
        console.log(`Element at mat1[${i}][${j}] is: ${mat1[i][j]}`);
    }
}