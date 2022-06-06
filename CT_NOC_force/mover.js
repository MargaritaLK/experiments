


class Mover {
  constructor(x, y, m, c, a) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0.03);
    this.acc = createVector(0, 0.05);
    this.mass = m;
    this.r = sqrt(this.mass) * 2
    this.color = c
    this.alphaValue = a

  }


  drag (c) {
      // direction of drag
      let drag = this.vel.copy();
      drag.normalize();
      drag.mult(-1);

      let speedSq = this.vel.magSq();
      drag.setMag(c * speedSq)

      this.applyForce(drag)
  }



  applyForce(force) {
    let f = p5.Vector.div(force, this.mass)
    this.acc.add(f) ;
  }


  edges() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r
      this.vel.y *= -1;
    }

    if (this.pos.x >= width- this.r) {
      this.pos.x = width - this.r
      this.vel.x += -1;
    } else if (this.pos.x <= 0 ) {
      this.pos.x = this.rq;
      this.vel.x *= -1;
    }
  }

  update () {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0)
  }

  show () {
    let makeColor = color(this.color);
    makeColor.setAlpha(this.alphaValue);
    fill(makeColor);
    stroke("#f8f9fa")
    strokeWeight(0.1)
    ellipse(this.pos.x, this.pos.y, this.r * 2)



  }
}
