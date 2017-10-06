var posX = 0;
var posY = 0;
var elem = document.getElementById("animate"); 
var breed = document.documentElement.clientWidth; 
var hoog = document.documentElement.clientHeight; 
console.log("breed:" + breed)


function up() {
    for (var i = 0; i < 30 ;i++) {
        if (posX > hoog) {
            posX = 0;
            elem.style.bottom = posX + 'px'; 
        }
        else {
            //setInterval(op, 50);
            //function op() {
            posX++;
            elem.style.bottom = posX + 'px'; 
            console.log(posX);
            //}
        }
    }
    eten();
}

function right() {
    for (var i = 0; i < 30 ;i++) {
        if (posY > breed) {
            posY = 0;
            elem.style.left = posY + 'px'; 
        }
        else {
            //setInterval(op, 50);
            //function op() {
            posY++;
            elem.style.left = posY + 'px'; 
            console.log(posY);
            //}
        }
    }
    eten();
}

function left() {
    for (var i = 0; i < 30 ;i++) {
        if (posY < 0) {
            posY = breed - 20;
            elem.style.left = posY + 'px'; 
        }
        else {
            //setInterval(op, 50);
            //function op() {
            posY--;
            elem.style.left = posY + 'px'; 
            console.log(posY);
            //}
        }
    }
    eten();
}

function down() {
    for (var i = 0; i < 30 ;i++) {
        if (posX < 0) {
            posX = hoog - 20;
            elem.style.bottom = posX + 'px'; 
        }
        else {
            //setInterval(op, 50);
            //function op() {
            posX--;
            elem.style.bottom = posX + 'px'; 
            console.log(posX);
            //}
        }
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