/*
characters sketch 1/27/2020
*/

// loading graphics
var boozy;
var drben;
var table;
var drbenzzz;
var drbenwake;
var radio
var mmmbox
var couch

// runs before set up
function preload() {
    boozy = loadImage('boozy.png');
    drben = loadImage('drben.png');
    table = loadImage('table.png');
    couch = loadImage('couch.png');
    radio = loadImage('radio.png');
    box = loadImage('mmmbox.png');
    drbenwake = loadImage('drbenwake.png');
    drbensleep = loadImage('drbenzzz.png');
}

//location variables

var boozyX = 300;
var boozyY = 300;

var drbenX = 700;
var drbenY = 280;

var tableX = 310;
var tableY = 410;

var story = "Dr Ben has a friend named boozy; a woozy old fashioned donut"

// lab, donut hub, home
var currentSetting = "lab";

function setup() {
    createCanvas(windowWidth, windowHeight);
}

// runs 60 fps draws graphics
function draw() {

    // conditional statement
    if (currentSetting == "home") {
        background("purple");
    }

    // office setting
    else if (currentSetting == "office") {
        background("gray");
        
    } else if (currentSetting == "lab") {
        // this is where drben will be in his office afterwards
        background("lightblue");
        fill("#C0C0C0");
        noStroke();
        rect(50, 50, 20, 20);
    }

    //draw characters
    image(boozy, boozyX, boozyY);
    image(drben, drbenX, drbenY);
    image(table, tableX, tableY);

    // narration
    textSize(50);
    textAlign(CENTER, CENTER);
    text(story, 300, 100, width / 2);

    //instructions
    testSize(10);
    fill('white');
    text("Click mouse to continue the story".wdith - 100, height - 70, 100);

    function mousePressed() {
        // change scene
        // scene order: home, office, lab

        if (currentSetting == "home") {

            // change settings
            currentSetting = "office";

            // update story
            story = "DrBen is in the office"

        } else if (currentSetting == "office") {
            currentSetting = "lab";

            story = "DrBen finds Boozy alive"

        } else if (currentSetting = "office") {
            currentSetting = "lab";
            // replicate the beginning of the story.
}
}