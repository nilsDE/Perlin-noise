let xoff = 0;
let yoff = 500;
let n = 200;
let ny = 0;
let particle;
let incrementX = 0.005;
let incrementY = 0.005;
let incrSliderX, incrSliderY;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('sketch-holder');
  pixelDensity(1);
  particle = new Particle();
  incrSliderX = createSlider(0.001, 0.05, 0.003, 0.001);
  incrSliderX.style('width', '160px');
  incrSliderY = createSlider(0.001, 0.05, 0.05, 0.001);
  incrSliderY.style('width', '160px');
  incrSliderX.parent('sliders');
  incrSliderY.parent('sliders');

}

function draw() {
  background(121);
  xoff = xoff + incrSliderX.value();
  n = noise(xoff) * width;
  yoff = yoff + incrSliderY.value();
  ny = noise(yoff) * height;

  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      //if (index / 4 % width < n && floor(index /4/height) < ny) {
      if (index / 4 % width < n) {
        pixels[index + 0] = 170;
        pixels[index + 1] = 0;
        pixels[index + 2] = 0;
        pixels[index + 3] = 120;
      }
    }
  }
  updatePixels();

  particle.update();
  particle.show();
  strokeWeight(1);
  stroke(0);
  line(n, 0, n, height);
  line(0, ny, width, ny);
}
