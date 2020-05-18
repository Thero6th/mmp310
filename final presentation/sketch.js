/*final project
05/14/20 */

// loading graphics and characters
var bubbleImage, dripImage

// runs before set up
function preload() {
    couchImage = loadImage('images/couch.png');
    radioImage = loadImage('images/radio.png');
    boxImage = loadImage('images/donut_box.png');
    drbenImage = loadImage('images/drben-clap.png');
    bubbleImage = loadImage('images/bubble.png');
    spillImage = loadImage('images/radio_spill.png');
    picImage = loadImage('images/drben_pic.png');
    dripImage = loadImage('images/drip.png');
    boozyImage = loadImage('images/boozy.png');
    boozyImage2 = loadImage('images/boozy-center.png');
    boozyImage3 = loadImage('images/boozy-roar.png');
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

    //HTML content for bubble slider
    var bubbleSpeedLabel = createElement("label", "Increase Bubble Speed");
    bubbleSpeedLabel.position(50, 50);

    //slider for bubble
    bubbleSpeedSlider = createSlider(4, 7, bubbleMinSpeed);
    bubbleSpeedSlider.position(50, 80);
    bubbleSpeedSlider.input(updateBubbleSpeed);

    //HTML content for drip slider
    var dripSpeedLabel = createElement("label", "Increase Drips");
    dripSpeedLabel.position(50, 120);

    //slider for drip
    dripSpeedSlider = createSlider(0.20, 20, dripMinSpeed);
    dripSpeedSlider.position(50, 160);
    dripSpeedSlider.input(updateDripSpeed);
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
    image(drbenImage, 40, 310);
    
    //original spill
    image(spillImage, 210, 295);
    
    //wall portriat
    image(picImage, 480, 100);

    // donut box
    image(boxImage, 180, 220);

    // radioactive capsule
    image(radioImage, 290, 317);
    
    // Boozy
    image(boozyImage, 600, 200);
    boozyImage.resize(500, 500)
    
    //Boozy centered
    image(boozyImage2, 600, 200);
    boozyImage2.resize(500, 500);
    
    //boozy roar
    image(boozyImage3, 600, 200);
    boozyImage3.resize(500, 500);

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
    
    function mousemoved() {
        
    }
}
