/*
characters sketch 1/27/2020
*/

// loading graphics
var boozy;
var drben;

// runs before set up
function preload() {
    boozy = loadImage('images/boozy.png');
    drben2 = loadImage('images/drben_2.png');
    table = loadImage('images/table.png');
    couch = loadImage('images/couch.png');
    radio = loadImage('images/radio.png');
    box = loadImage('images/donut_box.png');
    drben3 = loadImage('images/drben_3.png');
    drben1 = loadImage('images/drben_1.png');
}

//location variables

var boozyX = 300;
var boozyY = 300;

var drben1X = 400;
var drben1Y = 280;

var story = "Dr. Ben drops chemicals next to his box of donuts"

// lab, office, home
var currentSetting = "home";

function setup() {
    createCanvas(windowWidth, windowHeight);
}

// runs 60 fps draws graphics
function draw() {

    if (currentSetting == "home") {
        background("purple");
        image(couch, 140, 200);
        image(box, 130, 220);
        image(drben1, 230, 220);
        image(radio, 260, 350);
    } else if (currentSetting == "office") {
        background("gray");
        image(drben2, 200, 200);
    } else if (currentSetting == "lab") {
        background("lightblue");
        image(table, 200, 320);
        image(drben3, 300, 200);
        image(boozy, 180, 230);
        fill("#C0C0C0");
        noStroke();
        rect(0, 600, width, 400);
    }

    textSize(40);
    textAlign(CENTER, CENTER);
    textFont("georgia");
    text(story, 300, 100, width / 2);

    //instructions
    textSize(20);
    fill('white');
    text("Click mouse to continue story", 50, 70, 100);
}

function mousePressed() {

    if (currentSetting == "home") {

        currentSetting = "office";

        story = "Dr. Ben is in the office, worried about the results"

    } else if (currentSetting == "office") {
        currentSetting = "lab";

        story = "Dr. Ben finds a donut alive!"
        
    } else if (currentSetting = "lab") {
        currentSetting = "home";

        story = "Dr. Ben drops chemicals next to his box of donuts"
    }
}
