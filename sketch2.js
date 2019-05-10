let gifLength = 120;
let canvas;
let video;
var button;
var snapshotting = false;



function setup(){
  var p5Canvas = createCanvas(640,480);
  video = createCapture(VIDEO);
  video.size(640,480);
  video.hide();

  canvas = p5Canvas.canvas;
   capturer.start();

  button = createButton('Record');
  button.mousePressed(takesnap);

}

function takesnap (){
  snapshotting = true;
}

var counter = 0

function draw(){
  image(video, 0, 0, 640, 480);
  if (frameCount < gifLength){
    capturer.capture(canvas);
  } else if (frameCount == gifLength){
     capturer.stop();
     capturer.save();
  }
}
