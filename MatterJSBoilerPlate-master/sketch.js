
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var terra,copy,wall,wal,wa;
var engine,world;

function setup() {
	createCanvas(800,400);

	engine = Engine.create();
	world = engine.world;
 
	terra = new ground();
	copy = new paper(160,360);

	wa = new bin(600,340,60,10);
	wal = new bin(565,330,10,40);
	wall = new bin(635,330,10,40);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  terra.earth();

  wa.hiro();
  wal.hiro();
  wall.hiro();

  copy.display();
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(copy,copy.position,{x : -140,y: -70});
	}
}
