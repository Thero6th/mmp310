/*
class sketch 3/09/2020
*/

// loading graphics and characters
var bubbleImage, dripImage

// runs before set up
function preload() {
    couchImage = loadImage('couch.png');
    radioImage = loadImage('radio.png');
    boxImage = loadImage('donut_box.png');
    drben1Image = loadImage('drben_1.png');
    bubbleImage = loadImage('bubble.png');
    spillImage = loadImage('radio_spill.png');
    picImage = loadImage('drben_pic.png');
    dripImage = loadImage('drip.png');
}

// global values
var bubbles = [];
var numBubbles = 5;

var drips = [];
var numDrips = 5;

// interface value
var wallColor = 270;
var wallSlider;

var bubbleMinSpeed = 0.30;
var bubbleMaxSpeed = 2;
var bubbleSpeedSlider;

var dripMinSpeed = 0.03;
var dripMaxSpeed = 0.30;
var dripSpeedSlider;

function setup() {
    createCanvas(windowWidth, windowHeight);

    //bubble positions
    for (let i = 0; i < numBubbles; i++) {
        let x = random(250, 290)
        let y = random(50, 400)
        let bubble = new Bubble(x, y, bubbleImage)
        bubbles.push(bubble);
    }

    // drip positions
    for (let i = 0; i < numDrips; i++) {
        let x = random(200, 230)
        let y = random(300, 320)
        let drip = new Drip(x, y, dripImage)
        drips.push(drip);
    }

    // HTML content for wall discolorization
    var wallLabel = createElement("label", "Mutate The Wall");
    wallLabel.position(50, 150)

    // user interface 
    wallSlider = createSlider(10, wallColor, wallColor);
    wallSlider.position(55, 190);
    wallSlider.input(updateWall);

    //HTML content for bubble slider
    var bubbleSpeedLabel = createElement("label", "Increase Bubble Speed");
    bubbleSpeedLabel.position(350, 110);

    //slider for bubble
    bubbleSpeedSlider = createSlider(4, 7, bubbleMinSpeed);
    bubbleSpeedSlider.position(380, 150);
    bubbleSpeedSlider.input(updateBubbleSpeed);

    //HTML content for drip slider
    var dripSpeedLabel = createElement("label", "Increase Drips");
    dripSpeedLabel.position(400, 480);

    //slider for drip
    dripSpeedSlider = createSlider(0.20, 20, dripMinSpeed);
    dripSpeedSlider.position(395, 515);
    dripSpeedSlider.input(updateDripSpeed);
}

function updateWall() {
    wallColor = wallSlider.value();
}

function updateBubbleSpeed() {
    bubbleMinSpeed = bubbleSpeedSlider.value();
    bubbleMaxSpeed = bubbleMaxSpeed;

    for (let i = 0; i < numBubbles; i++) {
        bubbles[i].ySpeed = random(bubbleMinSpeed, bubbleMaxSpeed);
    }
}

function updateDripSpeed() {
    dripMinSpeed = dripSpeedSlider.value();
    dripMaxSpeed = bubbleMaxSpeed;

    for (let i = 0; i < numDrips; i++) {
        drips[i].ySpeed = random(dripMinSpeed, dripMaxSpeed);
    }
}

function draw() {
    //background wall object
    colorMode(HSB, 360, 100, 100);
    background(wallColor, 50, 40);

    // floor
    fill('#3c1f41');
    noStroke('');
    rect(0, 400, width, height);

    // door
    fill('#D2691E');
    stroke('black');
    rect(100, 200, 100, 200);

    // handle
    fill('#C0C0C0');
    stroke('#878787');
    ellipse(185, 300, 20, 20);

    //outer drip ellipse
    fill('#53e364');
    noStroke();
    ellipse(300, 460, 120, 40);

    //inner drip ellipse
    fill('#47c456');
    noStroke();
    ellipse(300, 455, 110, 30);

    // couch
    image(couchImage, 200, 200);

    // Dr ben
    image(drben1Image, 280, 210);
    image(spillImage, 210, 295);
    image(picImage, 480, 100);

    // donut box
    image(boxImage, 180, 220);

    // radioactive capsule
    image(radioImage, 290, 317);

    // animated bubbles
    for (let i = 0; i < numBubbles; i++) {
        bubbles[i].draw();
        bubbles[i].update();
    }
    
    // animated drips
    for (let i = 0; i < numDrips; i++) {
        drips[i].draw();
        drips[i].update();
    }
}
