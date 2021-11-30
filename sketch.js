let ground;
let lander;
var lander_img;
var bg_img;
var gameState=0;
const initial=0;
const play=1;
const end=2;
var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(1000,700);
  
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);

  textSize(45);
  fill("white");
  stroke("black");
  text("THE COSMO KINGS",250,100);
  textSize(30);
  text("Hello there!Welcome to the Epic THE COSMO KINGS game",120,150);
  textSize(20);
  fill("yellow");
  text("~>The Rules of the game are as follows: ",40,200);
  text("~>The goal of the game is to escape from the aliens,meteors and other obstacles.",40,250);
  text("~>You will have to travel to the destination(particular planet given).",40,300);
  text("~>You have to discover new things which are hidden in your destination planet.",40,350);
  text("~>You should have enough fuel by filling the fuel tank at gas stations at regular intervals.",40,400);
  text("~>Make sure you safely return back to Earth once the number of hidden things become 0.",40,450);
  text("~>You may press the arrow keys to move the spaceship before reaching the destination planet.",40,500);  
  text("scientists once you reach the destination planet.",40,525);  
  textSize(30);
  text("~>For now,You may press the Enter key to start the game.",40,605);  

if(keyDown("enter")&&gameState===0){
  gameState=1;
}

  
  

  drawSprites();
}


