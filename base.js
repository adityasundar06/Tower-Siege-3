class base{
    constructor(x, y, width, height){
        var options = {
            'restitution':0.4,
            'friction':1.9,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        stroke("black");
        strokeWeight(5);
        fill("green");
        rect(0,0,this.width,this.height);
        pop();
      }
}