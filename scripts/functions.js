console.log('functions.js loaded');

let name = 'John';
let lastName = 'Doe';  
// concatenation
console.log(name + ' ' + lastName);
console.log(`${name} ${lastName} ${1 + 1}`);   

// function declaration
function greet() {
    console.log(`Hello`);
}

greet();

function greetName(name) {
    console.log(`Hello ${name}`);
}

greetName('John');

// function 2 parameters
function greetFullName(name, lastName) {
    console.log(`Hello ${name} ${lastName}`);
}

greetFullName('John', 'Doe');
greetFullName('Jane2', 'Doe2');

function doubleNumber(number) {
    return console.log("The result is " + number * 2);
}  

doubleNumber(5);
doubleNumber(10);
doubleNumber(200);

function welcome(){
    let name2 = prompt("What is your name?");
    let age = prompt("What is your age?");
    console.log(`Hello ${name2}, you are ${age} years old.`);
}

function add(num1,num2){
    console.log(`The result is ${num1} + ${num2} = ${num1 + num2}`);
    document.write(`<p>The result is ${num1} + ${num2} = ${num1 + num2} </p>`);    
}

add(5,10);
add(10,10);

function combineNames(name="Unknow", lastName="Unknow"){
    console.log(name + " " + lastName);
    document.write(`<p>${name} ${lastName}</p>`);
}

combineNames('John', 'Doe');
combineNames('Doe');
combineNames();

function convertToSeconds(){
    let seconds = prompt("Enter the number of minutes to convert to seconds");
    console.log(`${seconds} minutes is equal to ${seconds * 60} seconds`);
    document.getElementById('results').innerHTML+=`<p>${seconds} minutes is equal to ${seconds * 60} seconds</p>`;
}

// convertToSeconds(5);
// convertToSeconds(10);
// convertToSeconds(20);