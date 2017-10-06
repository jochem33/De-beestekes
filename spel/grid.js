var posX = 0;
var posY = 0;
var elem = document.getElementById("animate"); 
var breed = document.documentElement.clientWidth; 
var hoog = document.documentElement.clientHeight; 
console.log("breed:" + breed)


function up() {
    if (posX > hoog) {
        posX = 0;
        elem.style.grid-column-start = posX; 
    }
    else {
        posX++;
        elem.style.grid-column-start = posX; 
        console.log(posX);
    }
    eten();
}

function down() {
    if (posX > hoog) {
        posX = 0;
        elem.style.grid-column-start = posX; 
    }
    else {
        posX--;
        elem.style.grid-column-start = posX; 
        console.log(posX);
    }
    eten();
}

function left() {
    if (posY > hoog) {
        posY = 0;
        elem.style.grid-column-start = posY; 
    }
    else {
        posY++;
        elem.style.grid-column-start = posY; 
        console.log(posY);
    }
    eten();
}

function right() {
    if (posY > hoog) {
        posY = 0;
        elem.style.grid-column-start = posY; 
    }
    else {
        posY--;
        elem.style.grid-column-start = posY; 
        console.log(posY);
    }
    eten();
}



function eten() {
    if (posX < 30) {
        if (posX > 100) {
            console.log("tussen 90 en 30");
            if (posY < 540) {
                if (posY > 610) {
                    console.log("tussen 90 en 30");
                }
            }
        }
    }
}


function reset() {
    posX = 0;
    posY = 0;
    elem.style.bottom = posX; 
    elem.style.bottom = posY; 
}