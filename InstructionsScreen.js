class InstructionsScreen extends Screen {
  constructor() {
    super();
    textAlign(CENTER);
    this.playButton = createButton("PLAY");
    this.playButton.position(width / 2 - 20, height / 1.7);
    this.playButton.mousePressed(playButtonClicked);
    this.visible = true;
  }

  display() {
    if (this.visible) {
      // *since i'm not redrawing the background, it makes the text look bold
      push();
      // instructions text
      textSize(20);
      text(
        "You have 10 seconds to stomp as \nmany bugs as possible. \nTry to reach your Bug Hit Goal.\nPress SPACEBAR to restart the game.",
        width / 2,
        height / 3
      );
      pop();
    }
  }
}
