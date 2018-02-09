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
  blurredImage = new SimpleImage(fileinput);
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
        var other = getPixelNearby(blurredImage, x, y, 10);
        blurredImage.setPixel(x, y, other);
      }
    }
}
function makeRainbow() {
  //change all pixels of image to gray
  for (var pixel of image.values()) {
    avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;

    if (pixel.getY() <= image.getHeight()/7){
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

    else if(pixel.getY() > image.getHeight()*1/7 && pixel.getY() <= image.getHeight()*2/7){
       if (avg>=128){
            pixel.setRed(255);
            pixel.setGreen(1.2*avg-51);
            pixel.setBlue(2*avg-255);
        }
        else{
          pixel.setRed(2*avg);
          pixel.setGreen(0.8*avg);
          pixel.setBlue(0);
        }
    }
    
    else if(pixel.getY() > image.getHeight()*2/7 && pixel.getY() <= image.getHeight()*3/7){
       if (avg>=128){
            pixel.setRed(255);
            pixel.setGreen(255);
            pixel.setBlue(2*avg-255);
        }
        else{
          pixel.setRed(2*avg);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);
        }
    }
    
    else if(pixel.getY() > image.getHeight()*3/7 && pixel.getY() <= image.getHeight()*4/7){
      if (avg>=128){
            pixel.setRed(2*avg-255);
            pixel.setGreen(255);
            pixel.setBlue(2*avg-255);
        }
        else{
          pixel.setRed(0);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);
        }
    }
    
    else if(pixel.getY() > image.getHeight()*4/7 && pixel.getY() <= image.getHeight()*5/7){
        if (avg>=128){
            pixel.setRed(2*avg-255);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(255);
        }
        else{
          pixel.setRed(0);
          pixel.setGreen(0);
          pixel.setBlue(2*avg);
        }
    }
    
    else if(pixel.getY() > image.getHeight()*5/7 && pixel.getY() <= image.getHeight()*6/7){
        if (avg>=128){
            pixel.setRed(1.2*avg-51);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(255);
        }
        else{
          pixel.setRed(0.8*avg);
          pixel.setGreen(0);
          pixel.setBlue(2*avg);
        }
    }
    
    else if(pixel.getY() > image.getHeight()*6/7 ){
        if (avg>=128){
            pixel.setRed(0.4*avg+153);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(0.4*avg+153);
        }
        else{
          pixel.setRed(1.6*avg);
          pixel.setGreen(0);
          pixel.setBlue(1.6*avg);
        }
    }
    
  }
  //display new image
  canvas = document.getElementById("can");
  image.drawTo(canvas);
}