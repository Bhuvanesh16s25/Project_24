const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world,dustbin,paper,ground;
function setup() {
  createCanvas(900, 400);
  rectMode(CENTER);


  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new Dustbin(720, 390, 100, 10);
  paper = new Paper(100, 300, 10);
  ground = new Ground(450,400,900,20);
  
}

function draw() {
     background("black");
       rectMode(CENTER);
    background(0);

    dustbin.display();
    paper.display();
    ground.display();

  }



function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 12,
      y: -13
    });
  }
}