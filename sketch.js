
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	
	var plane_options={
		isStatic:true
	}
	solo = Bodies.rectangle(400,695,800,10, plane_options)
	World.add(world,solo);
	var block1_options = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}
	block1 = Bodies.circle(220,10,50,block1_options)
	World.add(world,block1);

	var block2_options = {
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}
	block2 = Bodies.rectangle(110,50,100,100,block2_options);
	World.add(world,block2);

	var block3_options = {
		restitution:0.01,
		friction:1,
		frictionAir:0.3
	}
	block3 = Bodies.rectangle(550,50,200,100,block3_options);
	World.add(world,block3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  ellipse(block1.position.x, block1.position.y,50);
  rect(block2.position.x, block2.position.y,100,100);
  rect(block3.position.x, block3.position.y,200,100);
  
  drawSprites();
 
}



