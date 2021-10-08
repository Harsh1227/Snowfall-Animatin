var snow1;

function setup() {
  createCanvas(800,400);
  snow1 = new Ground ()
  createSprite(400, 200, 50, 50);
}

function draw() {
  if (snow1)
      background(snow1)
  drawSprites();
}