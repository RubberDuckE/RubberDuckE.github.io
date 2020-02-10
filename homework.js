// my variables
let t = 0;

function setup()
{
  createCanvas(windowWidth, windowHeight);
  noStroke();
} // setup() ends

function draw()
{
  // background here for translucent stuff
  background(10, 10);
  // for (let x...) is my rows
  // {
  //   for(let y...) is my colums
  for (let x = 100; x <= width - 100; x += 100)
  {
    for (let y = 50; y <= height - 50; y += 50)
    {
      let x1 = map(mouseX, 0, width, 0, 2 * PI, true);
      let y1 = map(mouseY, 0, height, 0, 2 * PI, true);

      let angle = x1 * x + y1 * y;

      let x2 = x1 + x * cos(t + angle);
      let y2 = y1 + x * sin(t + angle);

      if (mouseIsPressed)
      {
        fill(200, 40, 60);
      } // if ends
      else
      {
        fill(0, 200, 150);
      } // else ends

      ellipse(x2, y2, 20, 20);
    } // for (let y) ends
  } // for (let x) ends

  t += 0.01;
} // draw() ends

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
} // windowResized() ends
