var dog,dogImg,happydogImg; 
var Food,foodStock,foodS;
var database; 


function preload()
{
	dogImg = loadImage("images/dogImg.png");
  happydogImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  
  dog = createSprite(250,250,20,20);
  dog.addImage(dogImg)
  dog.scale = 0.2
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background("46,139,87");

if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(happydogImg);
}

if(keyWentDown(DOWN_ARROW)){
  writeStock(foodS)
  dog.addImage(dogImg);
  }
  

drawSprites();
}

function readStock(data){
foodS = data.val();
}

function writeStock(){
  database.ref('/').update({
 Food:x
  })
}


