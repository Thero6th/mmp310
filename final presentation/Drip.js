class Drip extends Thing {
    constructor(x, y, img) {
        super(x, y, img);
        this.ySpeed = random (dripMinSpeed, dripMaxSpeed);
    }
    update() {
        this.y += this.ySpeed;
        
        if(this.y > 340) {
            this.y = 300;
        }
    }
}