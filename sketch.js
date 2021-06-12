const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var boy
function preload()
{
	boyImg=loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	boy=createSprite(200,590,50,50)
boy.addImage(boyImg)
boy.scale=0.1
	//Create the Bodies Here.

tree1=new Tree()
ground1=new Ground()
stone1=new Stone()
mango1=new Mango(400,250,50,50)
mango2=new Mango(600,100,50,50)
mango3=new Mango(780,200,50,50)
mango4=new Mango(500,150,50,50)
mango5=new Mango(700,250,50,50)
mango6=new Mango(550,250,50,50)
mango7=new Mango(700,100,50,50)
rope1=new Rope(boy,{x:150,y:540})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  
  drawSprites();
 tree1.display()
 ground1.display()
 stone1.display()
 mango1.display()
 mango2.display()
 mango3.display()
 mango4.display()
 mango5.display()
 mango6.display()
 mango7.display()
 rope1.display()
}

function mouseDragged(){

	Matter.Body.setPosition(boy,{x:mouseX,y:mouseY})
}



