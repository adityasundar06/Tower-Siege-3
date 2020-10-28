var groundBody1,groundBody2,polyBody,slingshotBody,polygon1;
var score = 0;
var boxObj1;
var boxObj2;
var boxObj3;
var boxObj4;
var boxObj5;
var boxObj6;
var boxObj7;
var boxObj8;
var boxObj9;
var boxObj10;
var boxObj11;
var boxObj12;
var boxObj13;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	polyImage = loadImage("polygon.png");
}
function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
  world = engine.world;
  
  polygon1 = new polygon(200,300,50);
	groundBody1 = new ground(600,340,300,40);
	groundBody2 = new ground(1000,190,200,40);

  boxObj1 = new box(525,285,50,50);
  boxObj2 = new box(575,285,50,50);
  boxObj3 = new box(625,285,50,50);
  boxObj4 = new box(675,285,50,50);
  boxObj5 = new box(550,235,50,50);
  boxObj6 = new box(600,235,50,50);
  boxObj7 = new box(650,235,50,50);
  boxObj8 = new box(625,185,50,50);
  boxObj9 = new box(575,185,50,50);

  boxObj10 = new box(950,135,50,50);
  boxObj11 = new box(1000,135,50,50);
  boxObj12 = new box(1050,135,50,50);
  boxObj13 = new box(1000,85,50,50);

  slingshotBody = new slingshot(polygon1.body,{x:150, y:300});
	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  
  background("grey");
  stroke("red");
  fill("red");
  textSize(30);
  text("Score = " + score,150,140);

  Engine.update(engine);

  groundBody1.display();
  groundBody2.display();
  boxObj1.display();
  boxObj2.display();
  boxObj3.display();
  boxObj4.display();
  boxObj5.display();
  boxObj6.display();
  boxObj7.display();
  boxObj8.display();
  boxObj9.display();
  boxObj10.display();
  boxObj11.display();
  boxObj12.display();
  boxObj13.display();

  boxObj1.score();
  boxObj2.score();
  boxObj3.score();
  boxObj4.score();
  boxObj5.score();
  boxObj6.score();
  boxObj7.score();
  boxObj8.score();
  boxObj9.score();
  boxObj10.score();
  boxObj11.score();
  boxObj12.score();
  boxObj13.score();
  
  slingshotBody.display();
  polygon1.display();
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
    //}
}
function mouseReleased(){
    slingshotBody.fly();
}
function keyPressed(){
    if(keyCode === 32){
       Matter.Body.setPosition(polygon1.body, {x:150, y:50});
       slingshotBody.attach(polygon1.body);
    }
}