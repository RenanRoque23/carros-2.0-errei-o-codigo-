var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

var car1Width = 120;
var car1Height = 70;
var car1Image = "car1.png";
var car1X = 10;
var car1Y = 10;

var car2Width = 120;
var car2Height = 70;
var car2Image = "car2.png";
var car2X = 10;
var car2Y = 100;

var backgroundImage = "racing.jpg";

var backgroundImgTag, car1ImgTag, car2ImgTag;

function add() {
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundImage;

    car1ImgTag = new Image();
    car1ImgTag.onload = uploadcar1;
    car1ImgTag.src = car1Image;

    car2ImgTag = new Image();
    car2ImgTag.onload = uploadcar2;
    car2ImgTag.src = car2Image;
    
    // Adiciona os dois carros ao mesmo tempo
    uploadBackground();
    uploadcar1();
    uploadcar2();
}

function uploadBackground() {
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1ImgTag, car1X, car1Y, car1Width, car1Height);
}

function uploadcar2() {
    ctx.drawImage(car2ImgTag, car2X, car2Y, car2Width, car2Height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        car1_up();
    }
    if (keyPressed == '40') {
        car1_down();
    }
    if (keyPressed == '37') {
        car1_left();
    }
    if (keyPressed == '39') {
        car1_right();
    }
    if (keyPressed == '87') {
        car2_up();
    }
    if (keyPressed == '83') {
        car2_down();
    }
    if (keyPressed == '65') {
        car2_left();
    }
    if (keyPressed == '68') {
        car2_right();
    }
}

function car1_up() {
    if (car1Y >= 0) {
        car1Y = car1Y - 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down() {
    if (car1Y <= 500) {
        car1Y = car1Y + 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left() {
    if (car1X >= 0) {
        car1X = car1X - 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right() {
    if (car1X <= 500) {
        car1X = car1X + 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_up() {
    if (car2Y >= 0) {
        car2Y = car2Y - 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down() {
    if (car2Y <= 500) {
        car2Y = car2Y + 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left() {
    if (car2X >= 0) {
        car2X = car2X - 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right() {
    if (car2X <= 500) {
        car2X = car2X + 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
