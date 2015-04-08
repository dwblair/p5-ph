var img;  // Declare variable 'img'.

function setup() {
  createCanvas(720, 400);
  img = loadImage("./ph-scale.jpg");  // Load the image 
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0, img.width/2, img.height/2);
  // Displays the image at point (0, height/2) at half size
  //image(img, 0, height/2, img.width/2, img.height/2);
 img.loadPixels();
 for(var x = 0; x < img.width/2; x++) {
    for(var y = 0; y < img.height/2; y++) {
      var a = map(y, 0, img.height/2, 255, 0);
      img.set(x, y, [0, 153, 204, a]); 
    }
  }
  img.updatePixels(); 


}
