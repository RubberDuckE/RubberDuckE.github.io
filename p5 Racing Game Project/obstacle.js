class Obstacle
{
  constructor()
  {
    this.r = 75;
    this.x = width;
    this.y = height - 100;
  }

  show()
  {
    image(oImg, this.x, this.y, this.r, this.r);
    // fill (255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);
  }

  move()
  {
    this.x -= 10;
  }
}
