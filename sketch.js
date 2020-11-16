
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	dustbin1= new Dustbin (700,560,20,80)
	dustbin2= new Dustbin (550,560,20,80)
	dustbin3= new Dustbin (625,589,130,20)
  paper = new Paper (200,580,40,40)
	ground = new Ground(400,600,800,10)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  ground.display();

  drawSprites();
 
}

function keyPressed() {
   if(keyCode === UP_ARROW){

  Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-40});

   }
   
}


