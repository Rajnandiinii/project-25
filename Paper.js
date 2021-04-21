class Paper{
    constructor(x,y,r) {
        var options = {
            isStatic:true,
            'restitution':0.3,
            'friction':0.5,
            'density':2.0
        }
        this.body = Bodies.circle(x, y, r, options);
       this.width=r;
       this.height=r;
       this.image=loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("brown");
        imageMode(CENTER) 
        image(this.image,0,0,this.width,this.height);
        pop();
      
       
        
       
      }
}