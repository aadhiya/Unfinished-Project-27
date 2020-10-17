
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	bobDiameter = 40

	bobO1 = new Bob(width/2 - bobDiameter*2, height/4 + 500, bobDiameter)
	bobO2 = new Bob(width/2 - bobDiameter, height/4 + 500, bobDiameter)
	bobO3 = new Bob(width/2, height/4 + 500, bobDiameter)
	bobO4 = new Bob(width/2 + bobDiameter, height/4 + 500, bobDiameter)
	bobO5 = new Bob(width/2 + bobDiameter*2, height/4 + 500, bobDiameter)
	roof = new Roof(width/2, height/4, width/7, 20)
	rope1 = new Rope(bobO1.body, roof.body,-bobDiameter*2, 0)
	rope2 = new Rope(bobO2.body, roof.body,-bobDiameter, 0)
	rope3 = new Rope(bobO3.body, roof.body, 0, 0)
	rope4 = new Rope(bobO4.body, roof.body,+bobDiameter*1, 0)
	rope5 = new Rope(bobO5.body, roof.body,+bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roof.display();
  bobO1.display();
  bobO2.display();
  bobO3.display();
  bobO4.display();
  bobO5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function drawLine(constraint) {
bobBodyposition = constraint.bodyA.position
roofBodyposition = constraint.bodyB.psoition
roofBodyoffset = constraint.pointB
roofBodyX = roofBodyposition.x + roofBodyoffset.x
roofBodyY = roofBodyposition.y + roofBodyoffset.y
line(bobBodyposition.x, bobBodyposition.y, roofBodyX, roofBodyY)
}

function keyPressed() {
	if(keyCode == 32) {
		Matter.Body.applyForce(bobO1.body,bobO1.body.position,{x:-50,y:-45});
		}	
}
