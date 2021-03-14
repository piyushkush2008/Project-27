
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3,ground,paper

function preload()
{
	
}

function setup() {
createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(100,600,23);
ground=new Ground(400,680,800,20)

wall1=new Box(610,660,150,20)
wall2=new Box(525,620,20,100)
wall3=new Box(695,620,20,100)

Engine.run(engine);
  
}


function draw() {
rectMode(CENTER);
background(0);
paper.display();
ground.display();


wall1.display();
wall2.display();
wall3.display();



drawSprites();

}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
}
}



