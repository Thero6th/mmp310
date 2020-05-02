/*

3D particle system aading sound
4.30.2020

*/

var music;
var boils = [];

function preload() {
    music = loadSound('KieLoKaz.mp3');

    boils.push(loadSound("slime_1.wav"));
    boils.push(loadSound("slime_2.wav"));
    boils.push(loadSound("slime_3.wav"));
}

let particleSystem;
var gooSize = 250;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();
    particleSystem = new System(createVector(0, 100, 40));
}

function keyPressed() {
    if (keyCode == 32) {
        if (music.isPlaying()) {
            music.pause();
        } else {
            music.play();
        }
    }

    if (keycode = 13) {
        particleSystem.add();
    }
}

function draw() {
    background(200);

    // drag to rotate up and down, scroll to zoom in and out
    orbitControl();

    push();
    stroke('lightgreen');
    noFill();
    box(gooSize);
    pop();

    //stroke('lightgreen');
    //noFill();
    directionalLight(120, 120, 155, 1, 1, -1);
    pointLight(355, 355, 355, mouseX - width / 2, mouseY - height / 2, 150);

    particleSystem.update();
}
