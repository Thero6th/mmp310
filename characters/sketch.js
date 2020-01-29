/*
characters sketch 1/27/2020
*/

// loading graphics
var boozy;
var drben;
var b;

// runs before set up
function preload(){
	boozy = loadImage('boozy.png');
	drben = loadImage('drben.png');
	b = loadImage('boozy.png');
}

//location variables

var boozyX = 100;
var boozyY = 300;

var drbenX = 700;
var drbenY = 280;

var story = "Dr Ben has a friend named boozy; a woozy old fashioned donut"

function setup(){
	createCanvas(windowWidth, windowHeight);
}

// runs 60 fps draws graphics
function draw() {
	background('lightblue');

	//draw characters
	image(boozy, boozyX, boozyY);
	image(drben, drbenX, drbenY);


	// narration
	textSize(50);
	textAlign(CENTER, CENTER);
	text(story, 300, 100, width/2);
}