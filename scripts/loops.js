
// function tableOf2() {
//     console.log('table of 2!');
//     for (let i = 1; i <= 10; i++) {
//         console.log(`2 x ${i} = ${2 * i}`);
//         document.write(`2 x ${i} = ${2 * i} <br>`);
//     }
// }

// tableOf2();

// for (let i = 2; i <= 21; i+=2) {
//     document.write(`<p> ${i} </p>`);
// }

// function table(){
//     let value = prompt('Enter a number');
//     let num = parseFloat(value);

//     for (let i = 1; i <= 10; i++) {
//         document.write(`${num} x ${i} = ${num * i} <br>`);
//     }
// }

// table();

// while
// let i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// // do while
// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j <= 10);

// while function
function startCountdown() {
    let seconds = 10;
    let result = "";
    while (seconds >= 0){
        result += '<p>Launching in ' + seconds + ' seconds...</p>';
        seconds--;
    }
    result += 'Blast off!';
    document.getElementById("output").innerHTML = result;
}

// do-while function
function passwordPrompt() {
    let pass = prompt('Enter password');
    let correctPass = 'password';
    let result = "";
    do {
        pass = prompt('Enter password');
        result = 'User entered: ' + pass;
    } while (pass !== correctPass); 
    result = 'Welcome!';
    document.getElementById("output").innerHTML = result;
}

// for loop
function showProducts() {
    let products = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];
    let result = "Available products";
    for (let i = 0; i < products.length; i++) {
        result += `<li>Product ${i+1}: ${products[i]}</li>`;
    }
    document.getElementById("output").innerHTML = result;
}