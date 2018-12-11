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
      strokeWeight(map(i, 0, 1000, 1, 5));
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
