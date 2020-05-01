class Particle {
    constructor(position) {
        this.position = position.copy();
        this.lifespan = 40;
        this.speed = createVector(random(0.06, -0.06), random(0.04, 4), random(0.06, -0.06));
        this.acceleration = createVector(random(-0.1, 0.1), 0, random(0.1, -0.1));
        //this.rotation = createVector(random(PI), random(PI), random(PI));
        //this.rotationSpeed = createVector(random(1), random(1), random(1));

        this.color = createVector(100, 50, 100);
        this.colorSpeed = createVector(0, 100, 0)
    }

    update() {
        this.position.add(this.speed);
        this.speed.add(this.acceleration);
        this.color.add(this.colorSpeed);
        //this.rotation.add(this.rotationSpeed);
        this.lifespan -= 1;
    }

    display() {
        push();
        translate(this.position.x, this.position.y, this.position.z);
        //rotateX(this.rotation.x);
        //rotateY(this.rotation.y);
        //rotateZ(this.rotation.z);
        ambientMaterial(this.color.x, this.color.y, this.color.z);
        specularMaterial(this.color.x, this.color.y, this.color.z, 200);
        shininess(20);
        //emissiveMaterial(this.color.x, this.color.y, this.color.z, 200);
        fill(this.color.x, this.color.y, this.color.z);
        sphere(10);

        pop();

        push();
        translate(this.position.x, this.position.y, this.position.z);
        //rotateX(this.rotation.x);
        //rotateY(this.rotation.y);
        //rotateZ(this.rotation.z);
        ambientMaterial(this.color.x, this.color.y, this.color.z);
        specularMaterial(this.color.x, this.color.y, this.color.z, 200);
        shininess(20);
        //emissiveMaterial(this.color.x, this.color.y, this.color.z, 200);
        fill(this.color.x, this.color.y, this.color.z);
        sphere(10);

        pop();

        //floor
        push();
        translate(0, 200);
        rotateX(PI * 0.5);
        plane(1000, 1000);
        pop();

        //right tooth
        push();
        translate(-80, -20, 0);
        rotateZ(PI * 0.2);
        specularMaterial(100, 225, 100);
        box(20, 40);
        pop();

        //left tooth
        push();
        translate(80, -20, 10);
        rotateZ(PI * -0.2);
        specularMaterial(100, 225, 100);
        box(20, 40);
        pop();

        //middle tooth
        push();
        translate(0, 0, 0);
        specularMaterial(100, 225, 100);
        box(20, 40);
        pop();

        //goo
        push();
        translate(0, 200);
        specularMaterial(100, 225, 100);
        rotateX(PI * 0.5);
        ellipsoid(300, 200, 10);
        pop();

        //body of donut
        push();
        translate(0, -120, 0);
        specularMaterial(223, 115, 16);
        torus(180, 60);
        pop();

        specularMaterial(100, 225, 100);

        //right eye
        push();
        translate(-100, -220, 60);
        ellipsoid(40, 40, 50);
        pop();

        //left eye
        push();
        translate(100, -200, 60);
        ellipsoid(80, 80, 50);
        pop();

        specularMaterial(100, 50, 0);

        //right eyebrow
        push();
        translate(-100, -280, 60);
        rotateZ(PI * -0.85)
        box(140, 20);
        pop();

        //left eyebrow
        push();
        translate(100, -300, 60);
        rotateZ(PI * 0.85)
        box(140, 50);
        pop();

        specularMaterial(100, 0, 0);

        //right pupil
        push();
        translate(-100, -200, 100);
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
