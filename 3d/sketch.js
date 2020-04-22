/* 3d example */

// control rotation
var rotX, rotY, rotZ

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    createP("Scene Control").position(20, 30);

    rotX = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
    rotX.position(15, 50);

    rotY = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
    rotY.position(15, 90);

    rotZ = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
    rotZ.position(15, 130);
}

function draw() {
    background(51);

    // lights();
    noStroke();

    //floor
    push();
    translate(0, 200);
    rotateX(PI * 0.5);
    plane(1000, 1000);
    pop();

    ambientLight(20, 40, 20);
    directionalLight(255, 255, 255, 2, 0, 0);

    rotateX(rotX.value());
    rotateY(rotY.value());
    rotateZ(rotZ.value());

    sphere(100);
}
