class Particle {
    constructor(position) {
        this.position = position.copy();
        this.lifespan = 155;
        this.speed = createVector(random(1, -1), random(1, 6), random(20));
        this.acceleration = createVector(0, 0, 0);
        this.rotation = createVector(random(PI), random(PI), random(PI));
        this.rotationSpeed = createVector(random(1), random(1), random(1));

        this.color = createVector(100, 255, 100);
        this.colorSpeed = createVector(1, 0, 0)
    }

    update() {
        this.position.add(this.speed);
        this.speed.add(this.acceleration);
        this.color.add(this.colorSpeed);
        this.rotation.add(this.rotationSpeed);
        this.lifespan -= 1;
    }

    display() {
        push();
        translate(this.position.x, this.position.y, this.position.z);
        rotateX(this.rotation.x);
        rotateY(this.rotation.y);
        rotateZ(this.rotation.z);
        ambientMaterial(this.color.x, this.color.y, this.color.z);
        specularMaterial(this.color.x, this.color.y, this.color.z, 200);
        shininess(20);
        emissiveMaterial(this.color.x, this.color.y, this.color.z, 200);

        sphere(20);

        pop();

        //floor
        push();
        translate(0, 200);
        rotateX(PI * 0.5);
        plane(1000, 1000);
        pop();

        //goo
        push();
        translate(0, 200);
        specularMaterial(100, 225, 100);
        rotateX(PI * 0.5);
        ellipsoid(300, 200, 10);
        pop();

        //body of donut
        specularMaterial(223, 115, 16);
        torus(180, 60);

        //teeth TR
        push();
        translate(-100, -20, 40);
        rotateZ(PI * -0.25);
        rotateX(PI * 0.15);
        cone(40, 100);
        pop();

        //teeth TL
        push();
        translate(100, -20, 60);
        rotateZ(PI * 0.25);
        rotateX(PI * 0.15);
        cone(20, 100);
        pop();

        //teeth BL
        push();
        translate(60, 110, 60);
        rotateZ(PI * -0.25);
        rotateX(PI * 0.75);
        rotateY(PI * -0.15);
        cone(40, 100);
        pop();

        //teeth BR
        push();
        translate(-60, 110, 80);
        rotateZ(PI * 0.25);
        rotateX(PI * 0.75);
        rotateY(PI * -0.15);
        cone(20, 100);
        pop();

        specularMaterial(100, 225, 100);

        //right eye
        push();
        translate(-100, -180, 60);
        ellipsoid(40, 40, 50);
        pop();

        //left eye
        push();
        translate(100, -180, 60);
        ellipsoid(80, 80, 50);
        pop();

        specularMaterial(100, 50, 0);

        //right eyebrow
        push();
        translate(-100, -240, 60);
        rotateZ(PI * -0.85)
        box(140, 20);
        pop();

        //left eyebrow
        push();
        translate(100, -250, 60);
        rotateZ(PI * 0.85)
        box(140, 50);
        pop();

        specularMaterial(100, 0, 0);

        //right eye
        push();
        translate(-100, -180, 100);
        sphere(20);
        pop();

        //left eye
        push();
        translate(100, -160, 80);
        sphere(40);
        pop();
    }

    isDead() {
        return this.lifespan < 0;
    }
}
