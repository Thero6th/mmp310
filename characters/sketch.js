/*
characters sketch 1/27/2020
*/

// loading graphics
var boozy;
var drben;

// runs before set up
function preload() {
    boozy = loadImage('images/boozy.png');
    drben = loadImage('images/drben3.png');
}

//location variables

var boozyX = 300;
var boozyY = 350;

var drbenX = 520;
var drbenY = 250;

var story = "The story of Dr Ben and Boozy the donut"

function setup() {
    createCanvas(windowWidth, windowHeight);
}

// runs 60 fps draws graphics
function draw() {
    background("lightblue");
    image(drben, drbenX, drbenY);
    image(boozy, boozyX, boozyY);

    textSize(40);
    textAlign(CENTER);
    text(story, 200, 200, 400);
}
