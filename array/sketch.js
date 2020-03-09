/*
random loop sketch 3/1/2020
*/

// loading graphics and characters
var drben1, bubble;

// runs before set up
function preload() {
    couch = loadImage('couch.png');
    radio = loadImage('radio.png');
    box = loadImage('donut_box.png');
    drben1Image = loadImage('drben_1.png');
    bubbleImage = loadImage('bubble.png');
    spillImage = loadImage('radio_spill.png');
    picImage = loadImage('drben_pic.png');
}

/* position of variables for images */
var bubbleX = [];
var bubbleY = [];
var numBubble = 13;
var ystart = 300;

function setup() {
    createCanvas(windowWidth, windowHeight);

    //radio positions
    let y = 400;
    for (let i = 0; i < numBubble; i++) {
        bubbleY.push(y);
        y -= 400 / numBubble;
        bubbleX.push(random (250, 290));
    }
}

function draw() {
    background('purple');
    fill('#3c1f41');
    noStroke('');
    rect(0, 400, width, height);
    fill('#D2691E');
    stroke('black');
    rect(100, 200, 100, 200);
    fill('#C0C0C0');
    stroke('#878787');
    ellipse(185, 300, 20, 20);
    image(couch, 200, 200);
    image(box, 180, 220);
    image(radio, 290, 317);
    image(drben1Image, 280, 210);
    image(spillImage, 210, 295);
    image(picImage, 480, 100);

    for (let i = 0; i < numBubble; i++) {
        image(bubbleImage, bubbleX[i], bubbleY[i]);

        bubbleY[i] -= 1.5;
        if (bubbleY[i] < 0) {
            bubbleY[i] = ystart
        }
    }
}
