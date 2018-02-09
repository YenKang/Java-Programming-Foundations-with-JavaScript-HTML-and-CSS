var image = null;
var canvas = null;
var fileinput = null;
var avg = null;

var re_image =null;
var re_canvas = null;
var re_fileinput = null;

var blurredImage = null;

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



function doBlur() 
{
    file = document.getElementById("finput");
    blurredImage = new SimpleImage(file);
  
    blur();
    blurredImage.drawTo(canvas);
  
}

function ensureInImage (coordinate, size) 
{
  if (coordinate < 0) 
  {
    return 0;
  }
  if (coordinate >= size) 
  {
    return size - 1;
  }
  return coordinate;
}

function getPixelNearby (blurredImage, x, y, radius) 
{
  var dx = (Math.random() * 2 * radius) - radius;
  var dy = (Math.random() * 2 * radius) - radius;
  var nx = ensureInImage(x + dx, blurredImage.getWidth());
  var ny = ensureInImage(y + dy, blurredImage.getHeight());
  return blurredImage.getPixel(nx, ny);
}

function blur() 
{
  for (var pixel of blurredImage.values()) 
    {
      var x = pixel.getX();
      var y = pixel.getY();
      if (Math.random() > 0.5) 
      {
        var other = getPixelNearby(blurredImage, x, y, 5);
        blurredImage.setPixel(x, y, other);
      }
    }
}