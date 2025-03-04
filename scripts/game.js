let positionX = 340;
let positionY = 225;
let character = document.getElementById("character");

function moveLeft() {
    if (positionX > -15) {
        positionX -= 10;
        character.style.left = positionX + "px";
    }
}

function moveRight() {
    if (positionX < 360) {
        positionX += 10;
        character.style.left = positionX + "px";
    }
}

function moveUp() {
    if (positionY > - 5) {
        positionY -= 10;
        character.style.top = positionY + "px";
    }
}

function moveDown() {
    if (positionY < 220) {
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
