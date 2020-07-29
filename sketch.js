var imag,paper,bin,ground,bar1,bar2,bar3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	imag = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	
	

	//Create the Bodies Here.
	paper = new Paper(200,335,25);
	
	

	ground = new Ground(600,350,1200,20);
	
	bar1 = new Box(800,330,100,20);
	bar2 = new Box(740,265,20,150);
	bar3 = new Box(860,265,20,150);
	
	bin = createSprite(800,260,30,30);
	bin.addImage("image",imag);
	bin.scale=0.5;

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
	background(255);
	paper.display();
	ground.display();
	bar1.display();
	bar2.display();
	bar3.display();
	
	
	
	drawSprites();
	
}

function keyPressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:105,y:-110});
	}

}

