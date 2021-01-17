//Create variables here
var dog;
var dogImg;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
  dogImg=loadImage("images/Dog.png")
  happyDog = loadImage("images/happydog.png")
	//load images here
}

function setup() {
  createCanvas(500, 500);
  
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
  foodStock.set(20);

  dog = createSprite(250,250,20,20);
  dog.addImage(dogImg);
  dog.scale = 0.2;
}


function draw() {  

  background(46,139,87);

  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDog);
  }

  drawSprites();
  
  noStroke();
  textSize(20)
  fill("white")
  text("Note: Press UP_ARROW Key to Feed Drago Milk", 25, 20)
  text(foodS, 225, 140)
  
  //stroke("black");


  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  
  database.ref("/").update({
    Food:x
  });
}



