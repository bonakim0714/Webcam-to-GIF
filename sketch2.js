let gifLength = 260;
let canvas;
let video;



function setup(){
  var p5Canvas = createCanvas(640,480);
  background(random(255),random(255),random(255));
  // background('#fae');

  video = createCapture(VIDEO);
  video.size(640,480);
  video.hide();

  canvas = p5Canvas.canvas;
  capturer.start();

}

function draw(){
  image(video, 0, 0, 640, 480);

  if (frameCount < gifLength){
    capturer.capture(canvas);
  } else if (frameCount == gifLength){
     capturer.stop();
     capturer.save();
  }
}
