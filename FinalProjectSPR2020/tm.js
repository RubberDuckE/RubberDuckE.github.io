let canvas;
let video;
let classifier;
let flippedVideo;

let controllerRectWidth;
let cellphoneRectWidth;

let label = "...waiting";
let modelText = "model.json";

function preload(){
  //add a link to your own trained model
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GV01XnOHW/' + modelText);
}

function setup() {
 canvas = createCanvas(windowWidth, windowHeight);

 //create the video
 video = createCapture(VIDEO);
 video.size(640, 480);
 video.hide();

 //flip the video feed
 flippedVideo = ml5.flipImage(video);

//run the classify video function
 classifyVideo();

 controllerRectWidth = 0;
 cellphoneRectWidth = 0;
}

function classifyVideo(){
  flippedVideo = ml5.flipImage(video);
  //what are we going to classify? The video. When that is ready call the
  //gotResults function to update the label
  classifier.classify(flippedVideo, gotResults);
}


function gotResults(error, results){
  if(error){
    console.log(error);
    return
  }
  //label is the first in the array, which is the most likely label
  label = results[0].label;
  //after we get the new label,
  //we call classifyVideo again to analyze the video and update the label
  classifyVideo();
  console.log(results);
}

function draw() {
  background(0);
  image(video, 0, 0);

  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);

  //draw the label on teh canvas
  text(label, width/2, height - 16);

  if (label == "Video game controller")
  {
    controllerRectWidth += 2;
  }

  else if (label == "Mobile phone")
  {
    cellphoneRectWidth += 2;
  }

  fill(255, 0, 0);
  rect(0, 480, cellphoneRectWidth, 60); // rectangle for cellphone
  fill(0, 0, 255);
  rect(0, 550, controllerRectWidth, 60); // rectangle for controller
}
