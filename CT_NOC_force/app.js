let movers = [];

// coefficents
let dragC = 0.2

let nr_drips1 = 1000
let smallestDrip = 2
let lagerstDrip = 40
let nr_drips2 = 100



function setup() {
  createCanvas(600, 600)


  // blue
  for (let i = 0; i < nr_drips1; i ++) {
    movers[i] = new Mover(random(width),
                          random(height /2 ),
                          random(smallestDrip, lagerstDrip),
                          '#61a5c2',
                          random(20, 100));
  }

  //drip2 2
  for (let i = 0; i < nr_drips2; i++) {
    movers[i] = new Mover(
      random((width - width / 2), (width + width / 2)),
      random(height / 3),
      random(1, 10),
      '#ff0000',
      random(10, 200));
  }

}



function draw() {
  background('#495057')

  // water
  fill('#005f73')
  noStroke()
  rect(0, height / 2, width, height / 2)

  // water line
  stroke('#94d2bd')
  strokeWeight(0.2)
  line(0, height / 2, width, height / 2)




  for(let mover of movers) {
    let gravity = createVector(0, 0.1)
    let weight = p5.Vector.mult(gravity, mover.mass);
    mover.applyForce(weight)


    if (mouseIsPressed) {
      let wind = createVector(0.1, 0)
      mover.applyForce(wind)
    }

    if (mover.pos.y > height/2) {
      mover.drag(dragC)
    }


    mover.update()
    mover.edges()
    mover.show()

  }

}
