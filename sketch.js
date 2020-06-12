//name spacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint

var engine,world;
var polygon, polygonImg;

function preload(){
  //loading the image for the polygon
  polygonImg= loadImage("polygon.png");
}

function setup() {
  createCanvas(1200,600);
  
  //Physics Engine
  engine= Engine.create();
  world= engine.world;
  Engine.run(engine);

  //ground and the stands
  mainGround= new Ground(600,590,width,"chocolate")
  stand= new Ground(480,400,300,"darkSlateGray");
  stand2= new Ground(875,300,230,"darkSlateGray")

  //first pyramid
  box1= new Block(420,390,"cyan");
  box2= new Block(450,390,"cyan");
  box3= new Block(480,390,"cyan");
  box4= new Block(510,390,"cyan");
  box5= new Block(530,390,"cyan")

  box6= new Block(430,360,"pink");
  box7= new Block(460,369,"pink");
  box8= new Block(490,369,"pink");
  box9= new Block(520,369,"pink");

  box10= new Block(445,339,"tomato");
  box11= new Block(475,339,"tomato");
  box12= new Block(505,339,"tomato");

  box13= new Block(470,309,"greenYellow"); 
  box14= new Block(485,309,"greenYellow");

  box15= new Block(480,279,"purple");

  //second 
  box16= new Block(830,290,"purple");
  box17= new Block(860,290,"purple");
  box18= new Block(890,290,"purple");
  box19= new Block(920,290,"purple");
  
  box20= new Block(845,269,"greenYellow");
  box21= new Block(875,269,"greenYellow");
  box22= new Block(905,269,"greenYellow");

  box23=new Block(855,239,"tomato");
  box24=new Block(885,239,"tomato");

  box25= new Block(870,209,"pink");

  //polygon and the launcher
  polygon= Bodies.polygon(200,300,6,20,{density:0.0055});
  World.add(world,polygon)
  
  launcher= new Launcher(this.polygon,{x:200,y:200});

 
  
}

function draw() {
  background("oliveDrab");  
  //Engine.update(engine);

  //text
  textFont("times");
  textSize(50);
  fill(0)
  text("Tower Siege",450,50)
  textSize(30)
  textStyle('bold')
  fill(255)
  text("Use spacebar to reattach the polygon",350,125)

  //display
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display(); 
  mainGround.display();
  stand.display(); 
  stand2.display();
  launcher.display();

  //image
  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,50,50);

  drawSprites();
}

// mouseDragged event
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
// mouseReleased event
function mouseReleased(){
  launcher.fly();
}

function keyPressed(){
  if(keyCode===32){
    launcher.attatch(this.polygon);
    Matter.Body.setPosition(this.polygon,{x:200,y:200})
  }
}