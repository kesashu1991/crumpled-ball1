
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Paper,Ground, Pole,pole2,pole3
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     Paper= new paper(150,520,20);
	 Ground= new ground(200,550,2000,20)
    Pole= new pole(600,520,150,20)
	pole2=new pole(520,455,15,150)
	pole3=new pole(670,455,15,150)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Paper.display();
  Ground.display()
  Pole.display()
  pole2.display()
  pole3.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:10,y:-40})
	}
}



