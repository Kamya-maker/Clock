var hr,mn,sc;
var hrAngle,mnAngle,scAngle;

function setup() {
  createCanvas(1200,800);
  createSprite(400, 200, 50, 50);
angleMode(DEGREES);
}

function draw() {
  background(255,255,255);
  translate(200,200);
  rotate(-90);
  hr= hour();
  mn= minute();
  sc = second();

  scAngle= map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,30);
  hrAngle = map(hr%12,0,12,0,360);
 
  push()
  rotate(mnAngle);
  stroke(34,0,255);
  strokeWeight(7);
  line(0,0,75,0);
  pop()

  push()
  rotate(scAngle);
  stroke(52,237,237);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  push()
  rotate(hrAngle);
  stroke(52,141,237);
  strokeWeight(7);
  line(0,0,50,0);
  pop()

 

  point(0,0);
  stroke(208,0,255);
  strokeWeight(10);
  noFill();
  arc(0,0,300,300,0,scAngle);

  point(0,0);
  stroke(0,255,97);
  strokeWeight(10);
  noFill();
  arc(0,0,320,320,0,mnAngle);

  point(0,0);
  stroke(255,0,0);
  strokeWeight(10);
  noFill();
  arc(0,0,350,350,0,hrAngle);    


  drawSprites();
}