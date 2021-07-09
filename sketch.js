
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,left,right
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1=new ground (800,670,1600,20)
left=new ground(500,600,20,120)
right= new ground(1000,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display()
  left.display()
  right.display()
  drawSprites();
 
}



