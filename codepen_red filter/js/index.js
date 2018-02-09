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
    pixel.setRed(avg);
    pixel.setGreen(0);
    pixel.setBlue(0);
  }
  //display new image
  canvas = document.getElementById("can");
  image.drawTo(canvas);
}

function resetImage(){
  //Get input from file input
  re_fileinput = document.getElementById("finput");
  //Make new SimpleImage from file input
  re_image = new SimpleImage( re_fileinput);
  //Get canvas
  re_canvas = document.getElementById("can");
  //Draw image on canvas
  re_image.drawTo(re_canvas);
}