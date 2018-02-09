var image = null;
var canvas = null;
var fileinput = null;
var avg = null;

var re_image =null;
var re_canvas = null;
var re_fileinput = null;

function upload() {
  //Get input from file input
  fileinput = document.getElementById("finput");
  //Make new SimpleImage from file input
  image = new SimpleImage(fileinput);
  //Get canvas
  canvas = document.getElementById("can");
  //Draw image on canvas
  image.drawTo(canvas);
}

function makeGray() {
  //change all pixels of image to gray
  for (var pixel of image.values()) {
    avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  //display new image
  canvas = document.getElementById("can");
  image.drawTo(canvas);
}

function makeRed() {
  //change all pixels of image to gray
  for (var pixel of image.values()) {
    avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    
    if (avg>128){
        pixel.setRed(255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(2*avg-255);
    }
    else{
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
   
  }
  //display new image
  canvas = document.getElementById("can");
  image.drawTo(canvas);
}


function resetImage(){
  doClear(canvas);    
  re_fileinput = document.getElementById("finput");
  re_image = new SimpleImage(re_fileinput);
  re_canvas = document.getElementById("can");
  re_image.drawTo(re_canvas);
}

function clearCanvas() {
  doClear(canvas);  
}

function doClear(canvas) {
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
}