console.log("Conditionals");

// If statements

if (3 < 5){
    console.log("That's true");
}

let student1 = 45;
let student2 = 25;

if (student1 == student2){
    console.log("They are equal");
}

// If else statements

let isTrue = false;

if (isTrue == true){
    console.log("It's true");
} else {
    console.log("It's false");
}

let waterTemp = 92;

if (waterTemp >= 100){
    console.log("The water is boiling");
} else {
    console.log("The water is not boiling");
}


// challenge 
// let age = prompt("Insert your age :");

// if (age >= 21){
//     console.log("You are an adult");
// } else {
//     console.log("You are a minor");
// }


// // age = prompt("Insert your age :");

// if (age < 13){
//     console.log("You are a child");
// } else if (age < 21){
//     console.log("You are a teenager");
// } else if (age < 64){
//     console.log("You are an adult");
// } else {
//     console.log("You are a senior");
// }

// console.log("Welcome to the theater");
// let age = prompt("Insert your age :");

// if (age < 12){
//     console.log("The ticket is $5");
// } else if (age >= 12 && age < 18){
//     console.log("The ticket is $8");
// } else {
//     console.log("The ticket is $10");
// }


let temp = prompt("Insert the temperature in celcius:");
let outfit = "";

if (temp < 15){
    outfit = "its kinda cold we suggest you to wear a jacket";
    document.write(outfit);
} else if (temp >= 15 && temp < 25){
    outfit = "its a nice day you can wear a swater";
    document.write(outfit);
} else {
    outfit = "its hot you can wear a t-shirt";
    document.write(outfit);
}
