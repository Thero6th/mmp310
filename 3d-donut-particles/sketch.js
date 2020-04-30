/*

3D particle system
4.22.2020

*/

let particleSystem;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();
    particleSystem = new System(createVector(0, 0, 0));
}

function draw() {
    background(20);

    // drag to rotate up and down, scroll to zoom in and out
    orbitControl();

    directionalLight(120, 120, 155, 1, 1, -1);
    pointLight(355, 355, 355, mouseX - width / 2, mouseY - height / 2, 150);


    particleSystem.add();
    particleSystem.update();

}
