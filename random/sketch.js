/*
characters sketch 1/27/2020
*/

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(200);
    
    for(let x = 0; x <= width; x += 50) {
        let y = random(150, 250);
        ellipse(x, y, 50);
        text(x, x, 300);
    }
}