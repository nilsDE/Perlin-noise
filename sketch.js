let xoff = 0;
let yoff = 500;
let n = 200;
let ny = 0;
let particle;

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  particle = new Particle();
}

function draw() {
  background(121);

  xoff = xoff + 0.005;
  n = noise(xoff) * width;
  yoff = yoff + 0.005;
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

  strokeWeight(1);
  stroke(0,120);
  noFill();
  rectMode(CENTER);
  rect(width / 2, height / 2, width * 0.6, height * 0.6);
	stroke(0);
  line(n, 0, n, height);
  line(0, ny, width, ny);
  particle.update();
  particle.show();
}

class Particle {
  constructor() {
    this.x = floor(n);
    this.y = floor(ny);
    this.history = [];
  }
  show() {
    strokeWeight(5);
    point(this.x, this.y);
    for (let i = 0; i < this.history.length; i++) {
      let pos = this.history[i];
      stroke(255, i);
      strokeWeight(map(i, 0, 1000, 1, 6));
      point(pos.x, pos.y);
    }
  }
  update() {
    this.x = n;
    this.y = ny;
    let v = createVector(this.x, this.y);
    this.history.push(v);
    if (this.history.length >= 1000) {
      this.history.splice(0, 1);
    }
  }
}
