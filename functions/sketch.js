/*
characters sketch 1/27/2020
*/

var boozy;
var drben;

function preload(){
    boozy = loadImage('images/boozy.png');
    drben2 = loadImage('images/drben_2.png');
    table = loadImage('images/table.png');
    couch = loadImage('images/couch.png');
    radio = loadImage('images/radio.png');
    box = loadImage('images/donut_box.png');
    drben3 = loadImage('images/drben_3.png');
    drben1 = loadImage('images/drben_1.png');
}
var boozyX = 300;
var boozyY = 300;

var drben1X = 400;
var drben1Y = 280;

var story = "Dr. Ben drops chemicals next to his box of donuts"

var currentSetting = "home";

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw() {

	if (currentSetting == "home") {
		home();
	} else if (currentSetting == "office") {
		office();
	} else if (currentSetting == "lab") {
		lab();
	} else if (currentSetting == "ending") {
		home();
	}

	// draw characters
	imageMode(CENTER);
	image(drben1, drben1X, drben1Y);

	// narration
	fill('black');
	textSize(30);
	textAlign(CENTER, CENTER);
	text(story, width/4, 20, width/2);

	// instructions
	textSize(18);
	fill('white');
	// text("Click to go to the next scene", width - 100, height - 70, 100);
	text("Right arrow to advance story", width - 100, height - 70, 100);
}

function home() {
	background('purple');
    image(couch, 400, 400, 200);
    image(box, 200, 200);
    image(chemicals, 200, 200);
}

function office() {
        background("gray");
        image(drben2, 200, 200)
}

function lab() {
        background("lightblue");
        fill("#C0C0C0");
        noStroke();
        rect(0, 600, width, 400);
        image(table, 200, 320);
        image(drben3, 300, 200);
        image(boozy, 180, 230);
}

function mousePressed() {
    if (currentSetting == "home") {

        currentSetting = "office";

        story = "Dr. Ben is in the office, worried about the results"

    } else if (currentSetting == "office") {
        currentSetting = "lab";

        story = "Dr. Ben finds a donut alive!"
    } else if (currentSetting = "lab") {
        currentSetting = "home";

        story = "Dr. Ben drops chemicals next to his box of donuts"
    }
}

function home (){
background("purple");
image(couch);
image(radio);
}

function office (){
}

function lab (){
}

function mousePressed (){
}