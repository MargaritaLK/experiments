class Dots{
  constructor(radius, startAngle, size, color, alpha) {
    this.radius = radius;
    this.startAngle = startAngle;
    this.size = size
    this.color = color
    this.alpha = alpha
  }

  update() {
    if (mouseX < 500) {}
    let radiusChange = map(mouseX, 0, width, -1, 1);
    this.radius += radiusChange
  }

  show() {
    noStroke();
    let color1 = color(this.color)
    color1.setAlpha(this.alpha);
    fill(color1)
    let x_pos = cos(this.startAngle) * this.radius
    let y_pos = sin(this.startAngle) * this.radius
    circle(x_pos, y_pos, this.size);

  }

}
