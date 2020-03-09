class Character
{
  constructor()
  {
    this.r = 100;
    this.x = 50;
    this.y = height - 50;
    this.vy = 0; // velocity in y direction
    this.gravity = 1.5; // simulates gravity for player to move down again

  }

  jump()
  {
    if (this.y == height - this.r)
    {
      this.vy = -25;
    }
  }

  hits(obstacle)
  {
    // x & y for player/character
    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;

    // x & y for obstacle/barrier
    let x2 = obstacle.x + obstacle.r * 0.5;
    let y2 = obstacle.y + obstacle.r * 0.5;

    return collideCircleCircle(x1, y1, this.r, x2, y2, obstacle.r);
  }

  move()
  {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  show()
  {
    image(cImg, this.x, this.y - 50, this.r, this.r);
    // fill (255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);
  }
}
