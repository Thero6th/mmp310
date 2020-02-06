/*
characters sketch 1/27/2020
*/

// loading graphics
var boozy;
var drben;
var table;

// runs before set up
function preload(){
	boozy = loadImage('boozy.png');
	drben = loadImage('drben.png');
	table = loadImage('table.png')
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

function setup(){
	createCanvas(windowWidth, windowHeight);
}

// runs 60 fps draws graphics
function draw() {

	// conditional statement
	if (currentSetting == "lab") {
		background("lightblue");
		
		fill("#C0C0C0");
		noStroke();
		rect(50, 50, 20, 20);
		
	}

	// home setting
	else if(currentSetting == "home"){
// this is where the home will be constructed, along with boozy as a small donut
	}

	else if(currentSetting == "office") {
// this is where drben will be in his office afterwards
	}

	//draw characters
	image(boozy, boozyX, boozyY);
	image(drben, drbenX, drbenY);
	image(table, tableX, tableY);

	// narration
	textSize(50);
	textAlign(CENTER, CENTER);
	text(story, 300, 100, width/2);

	//instructions
	testSize(10);
	fill('white');
	text("Click mouse to continue the story". wdith - 100, height - 70, 100);

	function mousePressed() {
		// change scene
		// scene order: lab, home, office

		if (currentSetting == "lab") {

// change settings
currentSetting = "home";

// update story

// update characters through piskel and their positions
		} else if (currentSetting == "home") {
			currentSetting = "office";

			// update characters and story again
		} else if (currentSetting = "office"){
			currentSetting = "lab";
			// replicate the beginning of the story.
		}
}