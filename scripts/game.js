let positionX = 175;
let positionY = 25;
let character = document.getElementById("character");

function moveLeft() {
    if (positionX > 0) {
        positionX -= 10;
        character.style.left = positionX + "px";
    }
}

function moveRight() {
    if (positionX < 350) {
        positionX += 10;
        character.style.left = positionX + "px";
    }
}

function moveUp() {
    if (positionY > 0) {
        positionY -= 10;
        character.style.top = positionY + "px";
    }
}

function moveDown() {
    if (positionY < 50) {
        positionY += 10;
        character.style.top = positionY + "px";
    }
}

document.addEventListener("keydown", function (event) {
    switch (event.key.toLowerCase()) {
        case "a":
            moveLeft();
            break;
        case "d":
            moveRight();
            break;
        case "w":
            moveUp();
            break;
        case "s":
            moveDown();
            break;
    }
});
