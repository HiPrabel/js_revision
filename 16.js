// task 1
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); 

// task 2
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); 

// task 3
function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([10, 20, 30])); 
console.log(sumArray([])); 


//task 4
function maxArray(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    const maxOfRest = maxArray(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

console.log(maxArray([10, 20, 30])); 


// task 5
function reverseString(str) {
    if (str === "") {
        return "";
    }
    return reverseString(str.slice(1)) + str[0];
}


console.log(reverseString("world")); 

// task 6
function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("racecar")); 

// task 7
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
        return mid;
    }
    if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    }
    return binarySearch(arr, target, mid + 1, right);
}

console.log(binarySearch([5, 10, 15, 20, 25], 20)); 


// task 8
function countOccurrences(arr, target) {
    if (arr.length === 0) {
        return 0;
    }
    const count = arr[0] === target ? 1 : 0;
    return count + countOccurrences(arr.slice(1), target);
}

console.log(countOccurrences([1, 2, 3, 4, 5], 6)); 


// task 9
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node) {
    if (node === null) {
        return;
    }
    inOrderTraversal(node.left);
    console.log(node.val);
    inOrderTraversal(node.right);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

inOrderTraversal(root); 

// task 10
function treeDepth(node) {
    if (node === null) {
        return 0;
    }
    const leftDepth = treeDepth(node.left);
    const rightDepth = treeDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

// Test cases
console.log(treeDepth(root)); 
const singleNode = new TreeNode(1);
console.log(treeDepth(singleNode)); 
const emptyTree = null;
console.log(treeDepth(emptyTree)); 
