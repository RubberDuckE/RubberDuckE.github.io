// https://kylemcdonald.github.io/cv-examples/
// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2

let capture;
let tracker;

// filters and buttons
let tiger;
let darthVader;
let cloneTrooper;
let stormTrooper;
let rebel;
let bobaFett;

// buttons
let tigerButton; // ignore
let resetButton;

// button positions
let tigerButtonX = 100;
let tigerButtonY = 835;

let resetButtonX = 30;
let resetButtonY = 830;

let darthVaderX = 170;
let darthVaderY = 830;

let cloneTrooperX = 235;
let cloneTrooperY = 830;

let stormTrooperX = 300;
let stormTrooperY = 830;

let rebelX = 100;
let rebelY = 835;

let bobaFettX = 370;
let bobaFettY = 830;

// button bools
let tigerBool = false;
let resetBool = false;
let darthVaderBool = false;
let cloneTrooperBool = false;
let stormTrooperBool = false;
let rebelBool = false;
let bobaFettBool = false;

//video variables
let w = 1000,
    h = 800;

function preload()
{
    tiger = loadImage("images/tiger.png");
    // tigerButton = loadImage("images/tiger.png");
    resetButton = loadImage("images/reset.png");
    darthVader = loadImage("images/darthVader.png");
    cloneTrooper = loadImage("images/cloneTrooper.png");
    stormTrooper = loadImage("images/stormTrooper.png");
    rebel = loadImage("images/rebelHelmet.png");
    bobaFett = loadImage("images/bobaFett.png");
}

function setup() {
    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function() {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    createCanvas(windowWidth, windowHeight);
    capture.size(w, h);
    capture.hide();
    // colorMode(HSB);

    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);

    imageMode(CENTER);
}

function draw() {
    background(255);
    imageMode(CORNERS);
    image(capture, 0, 0, w, h);
    var positions = tracker.getCurrentPosition();
    imageMode(CENTER);
    noFill();
    stroke(255);
    beginShape();
    // this loop creates a line between the vertices i.e. between each point
    // for (let i = 0; i < positions.length; i++) {
    //     vertex(positions[i][0], positions[i][1]);
    // }
    endShape();

    // draw the buttons
    push();
      // imageMode(CORNERS);
      image(resetButton, resetButtonX, resetButtonY, 60, 60);
      // image(tigerButton, tigerButtonX, tigerButtonY, 60, 60);
      image(darthVader, darthVaderX, darthVaderY, 60, 60);
      image(cloneTrooper, cloneTrooperX, cloneTrooperY, 60, 60);
      image(stormTrooper, stormTrooperX, stormTrooperY, 60, 60);
      image(rebel, rebelX, rebelY, 60, 60);
      image(bobaFett, bobaFettX, bobaFettY, 60, 60);
    pop();

    fill(255, 0, 0);
    noStroke();
    // this loop basically prints out all points
    for (let i = 0; i < positions.length; i++) {
        fill(map(i, 0, positions.length, 0, 360), 50, 100);
        ellipse(positions[i][0], positions[i][1], 4, 4);
        text(i, positions[i][0], positions[i][1]);
        // ellipse(positions[21][0], positions[21][1], 20, 20);
        // ellipse(positions[17][0], positions[17][1], 20, 20);
        // ellipse(positions[62][0], positions[62][1], 50, 50); // draws an ellipse on your nose

        whichFilter(positions);
    }

    // smile detection example
    if (positions.length > 0) {
        var mouthLeft = createVector(positions[44][0], positions[44][1]);
        var mouthRight = createVector(positions[50][0], positions[50][1]);
        var smile = mouthLeft.dist(mouthRight);
        // uncomment the line below to show an estimate of amount "smiling"
        // rect(20, 20, smile * 3, 20); // amount you are smiling bar

        // uncomment for a surprise
        // noStroke();
        // fill(0, 255, 255);
        // ellipse(positions[62][0], positions[62][1], 50, 50);
    }
}

function whichFilter(positions)
{
  // tiger
  if (tigerBool)
  {
    image(tiger, positions[62][0], positions[62][1], 300, 300);
  }

  // darth vader
  if (darthVaderBool)
  {
    image(darthVader, positions[33][0], positions[33][1], 350, 350);
  }

  // clone trooper
  if (cloneTrooperBool)
  {
    image(cloneTrooper, positions[33][0], positions[33][1], 370, 370);
  }

  // storm trooper
  if (stormTrooperBool)
  {
    image(stormTrooper, positions[33][0], positions[33][1], 370, 370);
  }

  // rebel
  if (rebelBool)
  {
    image(rebel, positions[33][0], positions[33][1], 380, 380);
  }

  // boba fett
  if (bobaFettBool)
  {
    image(bobaFett, positions[33][0], positions[33][1], 380, 380);
  }
}

function mousePressed()
{
  //tiger
  if (dist(mouseX, mouseY, tigerButtonX, tigerButtonY) < 25)
  {
    tigerBool = true;
    resetBool = false;
    darthVaderBool = false;
    cloneTrooperBool = false;
    stormTrooperBool = false;
    rebelBool = false;
    bobaFettBool = false;
    console.log("tiger");
  }

  // reset
  if (dist(mouseX, mouseY, resetButtonX, resetButtonY) < 25)
  {
    tigerBool = false;
    resetBool = true;
    darthVaderBool = false;
    cloneTrooperBool = false;
    stormTrooperBool = false;
    rebelBool = false;
    bobaFettBool = false;
    console.log("reset");
  }

  // darth vader
  if (dist(mouseX, mouseY, darthVaderX, darthVaderY) < 25)
  {
    tigerBool = false;
    resetBool = false;
    darthVaderBool = true;
    cloneTrooperBool = false;
    stormTrooperBool = false;
    rebelBool = false;
    bobaFettBool = false;
    console.log("darth");
  }

  // clone trooper
  if (dist(mouseX, mouseY, cloneTrooperX, cloneTrooperY) < 25)
  {
    tigerBool = false;
    resetBool = false;
    darthVaderBool = false;
    cloneTrooperBool = true;
    stormTrooperBool = false;
    rebelBool = false;
    bobaFettBool = false;
    console.log("clone");
  }

  // storm trooper
  if (dist(mouseX, mouseY, stormTrooperX, stormTrooperY) < 25)
  {
    tigerBool = false;
    resetBool = false;
    darthVaderBool = false;
    cloneTrooperBool = false;
    stormTrooperBool = true;
    rebelBool = false;
    bobaFettBool = false;
    console.log("storm");
  }

  // rebel
  if (dist(mouseX, mouseY, rebelX, rebelY) < 25)
  {
    tigerBool = false;
    resetBool = false;
    darthVaderBool = false;
    cloneTrooperBool = false;
    stormTrooperBool = false;
    rebelBool = true;
    bobaFettBool = false;
    console.log("rebel");
  }

  // boba fett
  if (dist(mouseX, mouseY, bobaFettX, bobaFettY) < 25)
  {
    tigerBool = false;
    resetBool = false;
    darthVaderBool = false;
    cloneTrooperBool = false;
    stormTrooperBool = false;
    rebelBool = false;
    bobaFettBool = true;
    console.log("fett");
  }
} // mousePressed() ends
