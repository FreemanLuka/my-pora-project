// Variable
let x = 10;
let y = 5;

let n = x + y;

console.log(n);

const name = "Shedrack"; 
// // name = "Meshack";

// ''
let t = "20";
console.log(typeof t);


// let n;
// console.log(typeof n);




let num = 2000000000000;
console.log(typeof num);

// Boolean
let isBoy = true;
console.log(typeof isBoy);


let car = {
    name: "BMW",
    age: 20,
    model: 'Toyota',
    IsNew: false,
}

// Array
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr);


let firstNumber = 500;
let secondNumber = 700;

console.log(firstNumber < secondNumber);

function sum (num1, num2) {
    return num1 + num2;
}

console.log(sum(5, 4));

function greet (name) {
    return "Hello " + name;
}

console.log(greet("Chinelo"));
console.log(greet("Oluwatobi"));


const multiply = (num1, num2) => {
    return num1 * num2;
}

console.log(multiply(10, 20));

let score = 70;

if (score >= 70) {
    console.log("Passed")
}

let students = ["Ada", "John", "Musa", "Meshack", "Oluwatobi", "Chinelo", "Shedrack"];

// students.forEach(function(student){
//  console.log(student);
// });

//  Using a for loop 
for (i = 0; i < students.length; i++) {
    console.log(students[i]);
}

const student = [
    {
        name: "Ada",
        age: 15,
        gender: "female"
    },
    {
        name: "Meshack",
        age: 16,
        gender: "male"
    },
    {
        name: "John",
        age: 17,
        gender: "male"
    },
    {
        name: "Musa",
        age: 14,
        gender: "male"
    },
    {
        name: "Chinelo",
        age: 16,
        gender: "female"
    },
    {
        name: "Oluwatobi",
        age: 17,
        gender: "female"
    }
];


switch ("Nanwal") {
    case "Shedrack":
        console.log("This is Shedrack");
        break;
    case "Chinelo":
        console.log("This is Chinelo");
        break;
    case "Oluwatobi":
        console.log("This is Oluwatobi");
        break;
    case "Nanwal":
        console.log("This is Nanwal");
        break;
    default:
        console.log("Name not found");  
}

