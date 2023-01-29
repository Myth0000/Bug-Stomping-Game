class GameScreen extends Screen {
  constructor(score, timer){
    super()
    this.bugsOnScreen = [new Bug(bugImage1), new Bug(bugImage2), new Bug(bugImage3)];
    this.flySwattersOnScreen = [];
  }
  
  display()
  {
      // texts
      text(`Bugs Stomped: ${this.score}`, 60, 15);
      text(`HighScore: ${getHighscore()}`, width/2, 15);
      text(`${this.timer} secs`, width-30, 15);
      text(`Bug Hit Goal: ${getBugHitGoal()}`, width/2, height - 5);
      
      // displays the FlySwatters on screen
      this.flySwattersOnScreen.forEach(flySwatter =>
      {
        flySwatter.display();
      });
  }
  
  update()
  {
      // displays bugs on screen
      this.bugsOnScreen.forEach(bug =>
      {
        bug.update();
        bug.display();
      });
    
      // removes the FlySwatter from screen after 1 second of their creation
      let indexCount = 0;
      this.flySwattersOnScreen.forEach(flySwatter =>
      {
        if(flySwatter.canBeRemoved()) { this.flySwattersOnScreen.splice(indexCount, 1); }
        indexCount++;
      })
  }
}