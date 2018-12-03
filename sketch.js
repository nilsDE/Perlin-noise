let xoff = 0;

function setup() {
	createCanvas(600, 400);
	pixelDensity(1);
}

function draw() {
	background(121);
	
	xoff = xoff + 0.005;
  var n = noise(xoff) * width;
  	
	loadPixels();

	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			let index = (x + y * width) * 4;
			if (index/4%width < n) {
				pixels[index+0] = 170;
				pixels[index+1] = 0;
				pixels[index+2] = 0;
				pixels[index+3] = 140;
			}
		}
	}

	updatePixels();
	
	line(n, 0, n, height);
}
