
let angle = 0;
let angleV = 0.01;
let dots_a = [];
let dots_b = [];

function setup() {
  createCanvas(800, 800);

  // radius, startAngle, size, color, alpha
  for (let i = 0; i < 30; i++) {
    dots_a[i] = new Dots(
      random(10, 200),
      random(-TWO_PI, TWO_PI),
      random(3, 15),
      '#06d6a0',
      random(10, 300)
    )
  }

  for (let i = 0; i < 30; i++) {
    dots_b[i] = new Dots(
      random(10, 200),
      random(-TWO_PI, TWO_PI),
      random(3, 12),
      '#EF476F',
      random(10, 300)
    )
  }

}



function draw() {

  translate (width/2, height/2)
  rectMode(CENTER);
  rotate(angle);
  background(7, 59, 76, 40)

  for (let dot of dots_a) {
    dot.show()
    dot.update()
  }
  for (let dot of dots_b) {
    dot.show()
    dot.update()
  }

  noStroke()
  fill(239, 71, 111, 200)
  circle(0, 0, 20)

  angle += angleV;

  // noLoop()
}
