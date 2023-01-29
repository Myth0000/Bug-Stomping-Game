class Bug {
  constructor(bugImage) {
    this.size = 55;
    this.displayMargin = 25; // how far away from the edge of the screen the Bug will be drawn at
    this.bugHit = false;
    this.bugImage = bugImage;
    this.x = null;
    this.y = null;
  }

  display() {
    push();
    imageMode(CENTER);
    image(this.bugImage, this.x, this.y);
    pop();
  }

  update() {
    // updates the Bug's position
    if (this.x === null || this.y === null) {
      this.move();
    }
  }

  move() {
    // changes bug's position with a margin of 10 on all 4 edges of the canvas
    let bugDisplayMargin = this.size / 2 + this.displayMargin;
    this.x = random(
      this.displayMargin + this.size / 2,
      width - bugDisplayMargin
    );
    this.y = random(
      this.displayMargin + this.size / 2,
      height - bugDisplayMargin
    );
  }

  mouseOverBug() {
    let mouseDistanceFromBug = dist(mouseX, mouseY, this.x, this.y);

    // mouse cursor is over the bug object
    if (mouseDistanceFromBug <= this.size / 2) {
      return true;
    }
    return false;
  }
}
