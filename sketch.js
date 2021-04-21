
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(150,300,70);
ground=new Ground(700,550,1400,20);
r1=new Dustbin(900,500,20,100);
r2=new Dustbin(1000,540,200,20);
r3=new Dustbin(1100,500,20,100);
console.log(paper);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  r1.display();
  r2.display();
  r3.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-95})  
}  
} 




