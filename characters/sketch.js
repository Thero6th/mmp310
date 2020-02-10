/*
characters sketch 1/27/2020
*/

// loading graphics
var boozy;
var drben;
var table;
var drbenzzz;
var drbenwake;
var radio;
var mmmbox;
var couch;

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

var couchX = 200;
var couchY = 200;

var radioX = 200;
var radioY = 200;

var drbenwakeX = 200;
var drbenwakeY = 200;

var drbensleepX = 200;
var drbensleepY = 200;

var boxX = 200;
var boxY = 200;

var story = "Dr Ben has fallen asleep next to his box of donuts"

// lab, office, home
var currentSetting = "home";

function setup() {
    createCanvas(windowWidth, windowHeight);
}

// runs 60 fps draws graphics
function draw() {

    // conditional statement
    if (currentSetting == "home")
    {
        background("purple");
        
        image(couch);
        image(radio);
    } else if (currentSetting == "office") {
        background("gray");
        image(drbenwake);
    } else if (currentSetting == "lab") {
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
}
    function mousePressed()
    {
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