class Bubble extends Thing {
    update() {
        this.y -= 7
        
        if(this.y < 20) {
            this.y = 300;
        }
    }
}