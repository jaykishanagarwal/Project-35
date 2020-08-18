var dog,dogimage,dogimage1,milk,milkimage;

function preload()
{
  dogimage=loadImage("images/dogImg.png");
  dogimage1=loadImage("images/happydog.png");
  milkimage=loadImage("images/Milk.png");
	//load images here
}
var score=1;
function setup() {
  createCanvas(800, 700);
  dog=createSprite(400,350,50,50);
  dog.addImage(dogimage);
  dog.scale=0.25;

  milk=createSprite(700,600,50,50);
  milk.addImage(milkimage);
  milk.scale=0.1;
  
}


function draw() { 
  background("green");

    if (keyCode ===38) {
      score=score-1;
      dog.addImage(dogimage1)
      if (score<0) {
        score=0;
      }
    }
    if (keyCode ===40) {
      score=1;
      dog.addImage(dogimage);

    }

    if (score===0) {
      milk.visible=false;
    }
    if (score===1) {
      milk.visible=true;
    }





  textSize(34);
  text("Food Remaining :"+score,200,200);
  textSize(20);
  text("Press Up Arrow To Feed",200,50);
  text("Press Down Arrow To Refill",200,75);

  drawSprites();
  //add styles here
  dog.display();

}






