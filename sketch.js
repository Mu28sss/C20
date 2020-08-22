var fixed_rect,moving_rect;

function setup() {
  createCanvas(1200,800);
  fixed_rect = createSprite (400,400,50,100);
  fixed_rect.shapeColor = "red";

  moving_rect = createSprite (800,500,100,50);
  moving_rect.shapeColor = "red";

}

function draw() {
  background("cyan");

  moving_rect.x = mouseX;
  moving_rect.y = mouseY;

  if (moving_rect.x - fixed_rect.x < moving_rect.width/2 + fixed_rect.width/2 && 
      fixed_rect.x - moving_rect.x < fixed_rect.width/2 + moving_rect.width/2 && 
      moving_rect.y - fixed_rect.y < moving_rect.height/2 + fixed_rect.height/2 &&
      fixed_rect.y - moving_rect.y < moving_rect.height/2 + fixed_rect.height/2)
  {
    fixed_rect.shapeColor = "blue";
    moving_rect.shapeColor = "blue";
  }  

  else 
  {
    fixed_rect.shapeColor = "red";
    moving_rect.shapeColor = "red";
  }

  drawSprites();
}