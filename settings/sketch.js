/*
characters sketch 1/27/2020
*/

// loading graphics
var boozy;
var drben;

// runs before set up
function preload() {
    boozy = loadImage('images/boozy.png');
    drben = loadImage('images/drben.png');
    table = loadImage('images/table.png');
    couch = loadImage('images/couch.png');
    radio = loadImage('images/radio.png');
    box = loadImage('images/mmmbox.png');
    drbenwake = loadImage('images/drbenwake.png');
    drbensleep = loadImage('images/drbenzzz.png');
}

//location variables

var boozyX = 300;
var boozyY = 300;

var drbenX = 400;
var drbenY = 280;

var story = "Dr. Ben drops chemicals next to his box of donuts"

// lab, office, home
var currentSetting = "home";

function setup() {
    createCanvas(windowWidth, windowHeight);
}

// runs 60 fps draws graphics
function draw() {

    // conditional statement
    if (currentSetting == "home") {
        background("purple");
        image(radio, 330, 400, 50, 50);
        image(box, 370, 400, 80, 80);
        image(couch, 140, 140, 900, 600, 800);
        image(drbensleep, 230, 330, 150, 150);
    }
    
    else if (currentSetting == "office") {
        background("gray");
        image(drbenwake, 200, 400, 300, 300);
    }
    
    else if (currentSetting == "lab") {
        background("lightblue");
        fill("#C0C0C0");
        noStroke();
        rect(0, 600, width, 400);
        image(table, 200, 480);
        image(drben, 300, 400);
        image(boozy, 180, 380);
    }

    // narration
    textSize(50);
    textAlign(CENTER, CENTER);
    text(story, 300, 100, width / 2);

    //instructions
    textSize(20);
    fill('white');
    text("Click mouse to continue the story", 50, 70, 100);
}
    function mousePressed()
    {
        // change scene
        // scene order: home, office, lab

        if (currentSetting == "home") {

            // change settings
            currentSetting = "office";

            // update story
            story = "Dr. Ben is in the office, worried about the results"

        } else if (currentSetting == "office") {
            currentSetting = "lab";

            story = "Dr. Ben finds a donut alive!"

        } else if (currentSetting = "lab") {
            currentSetting = "home";
            // replicate the beginning of the story.
        }
}