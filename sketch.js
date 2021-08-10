var ball;
function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,20,40);
}

function draw() 
{
  background(30);



if(keyIsDown(DOWN_ARROW)){
  ball.y=ball.y+2;
}
if(keyIsDown(UP_ARROW)){
  ball.y=ball.y-2;
}



  drawSprites();

}




