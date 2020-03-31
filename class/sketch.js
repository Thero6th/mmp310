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
var numDrips = 10;

function setup() {
    createCanvas(windowWidth, windowHeight);

    //radio positions
    for (let i = 0; i < numBubbles; i++) {
        let x = random(250, 290)
        let y = random(50, 400)
        let bubble = new Bubble (x, y, bubbleImage)
        bubbles.push(bubble);
    }
    
    for (let i = 0; i < numDrips; i++) {
        let x = random (200, 230)
        let y = random (300, 320)
        let drip = new Drip (x, y, dripImage)
        drips.push(drip);
    }
}

function draw() {
        background('purple');
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

    // couch
    image(couchImage, 200, 200);

    // donut box
    image(boxImage, 180, 220);

    // radioactive capsule
    image(radioImage, 290, 317);

    // Dr ben
    image(drben1Image, 280, 210);
    image(spillImage, 210, 295);
    image(picImage, 480, 100);
    
    fill('#53e364');
    noStroke();
    ellipse(300, 455, 80, 30);

    // animated bubbles
    for (let i = 0; i < numBubbles; i++) {
        bubbles[i].draw();
        bubbles[i].update();
    }
    for (let i = 0; i < numDrips; i++) {
        drips[i].draw();
        drips[i].update();
    }
}
