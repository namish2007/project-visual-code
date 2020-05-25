var fixrect,movingrect;
function setup() {
  createCanvas(800,400);
  movingrect = createSprite(200,200, 50, 50);
  fixrect = createSprite(600,100,50,50);
}

function draw() {
  background(255,255,255);  
   movingrect.x = World.mouseX;
   movingrect.y = World.mouseY;
   if(fixrect.x - movingrect.x < fixrect.width/2 + movingrect.width/2 && 
    movingrect.x - fixrect.x < movingrect.width/2 + fixrect.width/2  &&
    fixrect.y - movingrect.y < fixrect.height/2 + movingrect.height/2 &&
    movingrect.y - fixrect.y < movingrect.height/2 + fixrect.height/2
    ){
   movingrect.shapeColor = "red";
   fixrect.shapeColor = "red";
   } 
   else { movingrect.shapeColor = "green";
   fixrect.shapeColor = "green";}
  drawSprites();

}