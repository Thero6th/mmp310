/*
loop sketch 3/1/2020
*/

// loading graphics
var drben1;

// runs before set up
function preload() {
    couch = loadImage('couch.png');
    radio = loadImage('radio.png');
    box = loadImage('donut_box.png');
    drben1 = loadImage('drben_1.png');
    bubble = loadImage('bubble.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

// runs 60 fps draws graphics
function draw() {
    background("purple");
    image(couch, 140, 200);
    image(box, 130, 220);
    image(drben1, 230, 220);
    image(radio, 260, 350);
    
    //bubbles
    for (let y = 130; y <= 320; y += 30) {
        image(bubble, 250, y);
        image(bubble, 200, y);
    }
    //also bubbles in another y position
    for (let y = 100; y <= 280; y +=30) {
        image(bubble, 225, y);
    }
}
