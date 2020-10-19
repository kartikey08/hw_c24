
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, paperImg;



function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper= new Paper(100,400);
ground= new Ground(750, 680, 1500, 30);
dustbinB= new RectG(1350, 655,200, 20);
dustbinL= new RectG(1450, 605,20, 100);
dustbinR= new RectG(1250, 605,20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
paper.display();
ground.display();
dustbinB.display();
dustbinL.display();
dustbinR.display();
  drawSprites();
 
}




function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-90});
  
	}
}

