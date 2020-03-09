let character;
let cImg;
let oImg;
let bkgrndImg;
let obstacles = [];
let gameStart = false;
let gameOverImg;
let gameOverBool = false;
let startScrnBool = false;
let startScrnImg;

function preload()
{
  cImg = loadImage('images/player.png');
  oImg = loadImage('images/obstacle.png');
  bkgrndImg = loadImage('images/newbkgrnd.jpg');
  gameOverImg = loadImage('images/gameover.png');
  startScrnImg = loadImage('images/startScreen.png');
} // preload() ends

function setup()
{
  createCanvas(windowWidth, windowHeight);
  character = new Character();
} // setup() ends

function keyPressed()
{
  if (!gameStart)
  {
    if (key == 's')
    {
      gameStart = true;
    } // inner if ends
  } // outer if ends

  else
  {
    if (key == ' ')
    {
      character.jump();
    } // if ends
  } // outer else ends

}


function gamePlay()
{
  for (let o of obstacles)
  {
    if (!gameOverBool)
    {
      o.move();
      o.show();
    }

    if (character.hits(o))
    {
      console.log('game over');
      // image(gameOverImg, 0, 0, 1000, 600);
      gameOverBool = true;
      background(gameOverImg);
      noLoop();
    }
  }

  if (!gameOverBool)
  {
    character.show();
    character.move();
  }

}

function draw()
{
  if (random(1) < 0.005)
  {
    obstacles.push(new Obstacle());
  }

  background(bkgrndImg);

  if (gameStart)
  {
    gamePlay();
  }

  else
  {
    image(startScrnImg, 0, 0, windowWidth, windowHeight);
  }
  //   for (let o of obstacles)
  //   {
  //     o.move();
  //     o.show();
  //
  //     if (character.hits(o))
  //     {
  //       console.log('game over');
  //       noLoop();
  //     }
  //   }
  //
  //   character.show();
  //   character.move();
  // }

} // draw() ends

function windowResized()
{
  resizeCanvas(windoWidth, windowHeight);
}
