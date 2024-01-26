
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground,left,right

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  var ball_options = {
   isStatic:false,
   restitution:0.3,
   friction:0,
   density:1.2
  }

 ball =Bodies.circle(200,200,30,ball_options)
 World.add(world,ball);

 var ground_options = {
   isStatic:true
 }

 ground = Bodies.rectangle(width/2,500,width,20,ground_options)
 World.add(world,ground);

 left= Bodies.rectangle(500,450,20,120,ground_options)
 World.add(world,left);

 right= Bodies.rectangle(800,450,20,120,ground_options)
 World.add(world,right);


	Engine.run(engine);

}


function draw() {
  ellipseMode(CENTER);
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,30)
 rect(ground.position.x,ground.position.y,width,20)
 rect(left.position.x,left.position.y,20,120)
 rect(right.position.x,right.position.y,20,120)


}

function keyPressed() {
  if(keyCode === UP_ARROW){
    
    Matter.Body.applyForce(ball,{x:0,y:0},{x:110,y:-110})

  }
}

