////////////////////////////////////////////////////////
/// THIS IS WHERE ALL THE EVENT FUNCTIONS ARE STORED ///
////////////////////////////////////////////////////////

function mousePressedInsideCanvas() {
  if (!game.gameOver) {
    // bug hit check
    game.view.bugsOnScreen.forEach((bug) => {
      if (!game.gameOver && bug.mouseOverBug()) {
        game.view.flySwattersOnScreen.push(
          new FlySwatter(mouseX - 50, mouseY - 25)
        );
        bug.move();
        game.score++;
        console.log("bug hit");
      }
    });

    // updates HighScore
    if (game.score > getHighscore()) {
      storeItem("bughighscore", game.score);
    }
  }
}

function keyPressed() {
  if (keyCode === 32) {
    // resets all variables to default
    game.reset();

    // moves the bug's position
    game.bugsOnScreen.forEach((bug) => bug.move());
  }
}

function playButtonClicked() {
  // instructionsScreen.visible = false;
  game = new Game();
}
