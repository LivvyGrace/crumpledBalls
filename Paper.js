class Paper
{
    constructor(x,y,r) {

    

    var options = {
        density: 1.2,
        restitution: 0.2,
        friction: 1.0

 
    }
this.x = x;
this.y = y;
this.r = r;
this.image = loadImage("paper.png")

    this.body = Bodies.circle(200,100,30, options);
World.add(world,this.body);
}

display(){

    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
fill("red");
    imageMode (CENTER)
    image(this.image, 0,0,this.r,this.r)

    pop();

}

}