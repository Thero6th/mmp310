/*

3D particle system
4.22.2020

*/

let particleSystem;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();

    particleSystem = new system(createVector(0, 0, 0));
}

function draw() {
    background(31);

    // drag to rotate up and down, scroll to zoom in and out
    orbitControl();

    directionalLight(220, 220, 255, 1, 1, -1);

    box(100);

    particleSystem.add();
    particleSystem.update();
}
