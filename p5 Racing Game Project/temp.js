let character;
let cImg;
let oImg;
let bkgrndImg;
let obstacles = [];
let score = 0;
let timerValue = 0;

function preload()
{
  cImg = loadImage('images/player.png');
  oImg = loadImage('images/obstacle.png');
  bkgrndImg = loadImage('images/newbkgrnd.jpg');
} // preload() ends

function setup()
{
  createCanvas(1000, 600);
  character = new Character();
} // setup() ends

function keyPressed()
{
  if (key == ' ')
  {
    character.jump();
  }
}

function draw()
{
  if (random(1) < 0.005)
  {
    obstacles.push(new Obstacle());
  }

  background(bkgrndImg);


  for (let o of obstacles)
  {
    o.move();
    o.show();

    if (character.hits(o))
    {
      console.log('game over');
      noLoop();
    }
  }

  character.show();
  character.move();


} // draw() ends
