class Drip extends Thing {
    update() {
        this.y += 0.10
        
        if(this.y > 340) {
            this.y = 300;
        }
    }
}