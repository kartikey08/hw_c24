class RectG {
    constructor(x, y, width, height){
        var options={
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display(){
        var posR= this.body.position;
        rectMode(CENTER);
        fill("brown");
        strokeWeight(0);
        rect(posR.x, posR.y, this.width, this.height);
    }
}