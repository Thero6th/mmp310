/*

3D particle system aading sound
4.30.2020

*/

var music;

function preload() {
    music = loadSound('KieLoKaz.mp3');
}

let particleSystem;
var boxSize;

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
}

function draw() {
    background(20);

    // drag to rotate up and down, scroll to zoom in and out
    orbitControl();

    //stroke('lightgreen');
    //noFill();
    directionalLight(120, 120, 155, 1, 1, -1);
    pointLight(355, 355, 355, mouseX - width / 2, mouseY - height / 2, 150);


    particleSystem.add();
    particleSystem.update();
}
