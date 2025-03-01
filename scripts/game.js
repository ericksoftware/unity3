let position = 175;
let character = document.getElementById("character");

function moveLeft(){
    if (position > 0){
        position -= 10;
        character.style.left = position + "px";
    }
    console.log(position);
}