class Game {
  constructor() {
    this.score = 0;
    this.timelimit = 10;
    this.timer = this.timelimit;
    this.gameOver = false;
    this.bugsOnScreen = [new Bug(), new Bug()];
    this.view = new GameScreen(this.score, this.timer);

    newBugHitGoal();
  }

  update() {
    // updates the view's score
    this.view.score = this.score;

    // timer
    if (frameCount % 60 == 0) {
      this.timer--;
      this.view.timer = this.timer;

      // timer reaches 0, and EndScreen pops up
      if (this.timer == 0) {
        this.gameOver = true;
        this.view = new EndScreen(this.score);
      }
    }
  }

  displayView() {
    // displays the gamescreen when game is not over
    if (!this.gameOver) {
      // deletes the play button on instructionsScreen
      if (instructionsScreen.visible === true) {
        instructionsScreen.playButton.remove();
      }

      this.view.update();
      this.view.display();
    } else {
      // game over, so it displays EndScreen
      this.view.display();
    }
  }

  reset() {
    // resets the variables
    this.gameOver = false;
    this.timer = this.timelimit;
    this.score = 0;
    newBugHitGoal();
    this.view = new GameScreen(this.score, this.timer);
  }
}
