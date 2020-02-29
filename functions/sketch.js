/*
characters sketch 1/27/2020
*/

var boozyImage;
var drben1Image;
var drben2Image;
var drben3Image;
var couchImage;
var tableImage;


function preload() {
    drben1Image = loadImage('drben_1.png');
    boozyImage = loadImage('boozy.png');
    drben2Image = loadImage('drben_2.png');
    drben3Image = loadImage('drben_3.png');
    couchImage = loadImage('couch.png');
    radioImage = loadImage('radio.png');
    tableImage = loadImage('table.png');
    boxImage = loadImage('donut_box.png');
}

// home, office, lab
var currentSetting = "home";

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
}

function draw() {

    if (currentSetting == "home") {
        home();
        drben1(500, 430);
        narration("Dr. Ben drops chemicals onto his box of donuts while he's sleeping");
        instructions('');
    } else if (currentSetting == "office") {
        office();
        drben2(430, 350);
        narration("Dr. Ben waits in his office, worried about the results");
        instructions('');
    } else if (currentSetting == "lab") {
        lab();
        drben3(400, 300);
        boozy(120, 275);
        narration("Dr. Ben births his new friend Boozy the Donut!")
        instructions('');
    }
    // draw characters
    imageMode(CENTER);
}

function boozy(x, y) {
    image(boozyImage, x, y);
}

function drben1(x, y) {
    image(drben1Image, x, y);
}

function drben2(x, y) {
    image(drben2Image, x, y);
}

function drben3(x, y) {
    image(drben3Image, x, y);
}

function narration(story) {
    // narration
    fill('white');
    textSize(30);
    textAlign(CENTER);
    textFont("georgia");
    text(story, width / 4, 20, width / 2);
}

function instructions() {
    // instructions
    textSize(18);
    fill('white');
    text("Click mouse to continue story", 30, 40, 200);
}

function home() {
    background('purple');
    fill('#533875');
    noStroke();
    rect(0, 460, width, 200);
    image(couchImage, 400, 400);
    image(boxImage, 350, 370);
    image(radioImage, 390, 410);
}

function office() {
    background("gray");
    // door
    fill('#B07840');
    stroke('black');
    rect(240, 240, 100, 200);
    // door handle
    fill('#C0C0C0');
    stroke('#878787');
    ellipse(320, 340, 20, 20);
    // window
    fill('#add8e6');
    stroke('#C0C0C0');
    rect(500, 200, 200, 100);
    // floor
    fill('#778899');
    noStroke('');
    rect(0, 440, width, 200);
}

function lab() {
    background("lightblue");
    // floor
    fill("#C0C0C0");
    noStroke();
    rect(0, 400, width, 300);
    // window
    fill('gray');
    stroke('#C0C0C0');
    rect(500, 140, 200, 100);
    // door
    fill('#B07840');
    stroke('black');
    rect(240, 200, 100, 200);
    // door handle
    fill('#C0C0C0');
    stroke('#878787');
    ellipse(320, 300, 20, 20);
    image(tableImage, 150, 360);
}

function mousePressed() {
    // change scene 
    // scene order: beach, ocean, island
    if (currentSetting == "home") {
        currentSetting = "office";
    } else if (currentSetting == "office") {
        currentSetting = "lab";
    } else if (currentSetting == "lab") {
        currentSetting = "home";
    }
}
