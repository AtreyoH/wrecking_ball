const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var boxes=[];
function setup() {
  createCanvas(1500,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  for(var i=100;i<height;i=i+100){
    for(var k=800;k<width-200;k=k+100){  
    boxes.push(new Block(k,i,70,70))
    }
  }
  ball=new Ball(500,500,40,40)
  sling=new Rope(ball.body,{x:500,y:200})
}
function draw() {
  background(56,44,44); 
  textSize(20);
  fill("lightyellow");
  ground.display();
  ball.display();
  sling.display();
  for(var j=0;j<boxes.length;j++){
    boxes[j].display();
  }
 
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}