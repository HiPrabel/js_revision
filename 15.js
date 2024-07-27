// Task 1: Define a class Person with properties name and age, and a method to return a greeting message.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    // Task 2: Add a method to the Person class that updates the age property and logs the updated age.
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}

// Creating an instance of the class and logging the greeting message.
const person1 = new Person('Alice', 25);
console.log(person1.greet());
person1.updateAge(26);

// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID.
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }

    // Task 4: Override the greeting method in the Student class to include the student ID in the message.
    greet() {
        return `${super.greet()} My student ID is ${this.studentId}.`;
    }
}

const student1 = new Student('Bob', 20, 'S12345');
console.log(student1.getStudentId());
console.log(student1.greet());

// Task 5: Add a static method to the Person class that returns a generic greeting message.
Person.genericGreet = function() {
    return 'Hello from the Person class!';
}

console.log(Person.genericGreet());

// Task 6: Add a static property to the Student class to keep track of the number of students created.
Student.numberOfStudents = 0;

class StudentWithCount extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        StudentWithCount.incrementStudentCount();
    }

    static incrementStudentCount() {
        if (!this.numberOfStudents) {
            this.numberOfStudents = 0;
        }
        this.numberOfStudents++;
    }

    static getStudentCount() {
        return this.numberOfStudents;
    }

    greet() {
        return `${super.greet()} My student ID is ${this.studentId}.`;
    }
}

const student2 = new StudentWithCount('Charlie', 22, 'S67890');
console.log(StudentWithCount.getStudentCount()); // Output: 1
const student3 = new StudentWithCount('Dave', 23, 'S09876');
console.log(StudentWithCount.getStudentCount()); // Output: 2

// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property).
class PersonWithFullName {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }

    greet() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
}

// Creating an instance and logging the full name using the getter.
const person2 = new PersonWithFullName('Eve', 'Smith', 28);
console.log(person2.fullName); // Output: Eve Smith

// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName).
person2.fullName = 'Grace Johnson';
console.log(person2.fullName); // Output: Grace Johnson
console.log(person2.greet()); // Output: Hello, my name is Grace Johnson and I am 28 years old.

// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money.
class Account {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: ${amount}, New Balance: ${this.#balance}`);
        }
    }

    getBalance() {
        return this.#balance;
    }
}

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
const account1 = new Account(100);
console.log(account1.getBalance());
account1.deposit(50);
account1.withdraw(30);
console.log(account1.getBalance());
