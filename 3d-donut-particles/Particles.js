class Particle {
    constructor(position) {
        this.position = position;
        this.lifespan = 255;
        this.speed = createVector(0, 0, 0);
    }
    
    update() {
        this.position.add(this.speed);
        this.lifespan -= 1;
    }
    
    display() {
        push();
        
        translate(this.position.x, this.position.y, this.position.z);
        
        box(50);
        
        pop();
    }
    
    isDead() {
        return this.lifespan < 0;
    }
}