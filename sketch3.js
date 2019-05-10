let canvas;
let video;

let btn;


function record(){
  var capturer = new CCapture( {
     framerate: 60,
     format: 'gif',
     workersPath: './js/',
     verbose: true
    } );
  capturer.start();
  // btn.textContent = "stop recording";
  // btn.onclick = e => {
  //   capturer.stop();
  //   capturer.save();
  //   capturer = null;
  //   btn.textContent = "start recording";
  //   btn.onclick = record;
  // };
}

function setup(){

  var p5Canvas = createCanvas(640,480);
  video = createCapture(VIDEO);
  video.size(640,480);
  video.hide();

  canvas = p5Canvas.canvas;

  frameRate(24)
  btn = document.createElement("button");
  btn.textContent = "start recording";
  document.body.appendChild(btn);
  btn.onclick = record;
  //btn.click(); //start recording automatically

}

function draw(){
  image(video, 0, 0, 640, 480);
  // if (capturer){
  //   capturer.capture(canvas);
  // }
}
