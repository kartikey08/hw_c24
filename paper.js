class Paper {
    constructor (x, y){
        this.body = Bodies.circle(x, y, 20, {isStatic:false, 'density':1.2, 'restitution': 0.3, 'friction': 0.5})
        this.body.diameter= 45;

        World.add(world, this.body);
    }

    display(){
        var pos= this.body.position;
        ellipseMode(CENTER);
        push();
        translate(pos.x, pos.y);
        fill(150);
        ellipse(0, 0, this.body.diameter);
        pop();
    }
}