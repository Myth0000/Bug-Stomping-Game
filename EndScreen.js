class EndScreen extends Screen {
  constructor(score){
    super()
    this.score = score;
  }
  
  display()
  {
      // Endscreen text if bughitgoal reached
      if(this.score >= getBugHitGoal())
      {
        push();
          text(`YAY! You reached the Bug Hit Goal of ${getBugHitGoal()}.`, width/2, height/2 - 60)
        pop();
      }
      else // Endscreen text if bughitgoal not reached
      {
        push();
          text(`Aww, you didn't reach your Bug Hit Goal of ${getBugHitGoal()}.\nTry again by pressing the SPACEBAR.`, width/2, height/2 - 90)
        pop();
      }
    
    push();
      text(`Game Over\n${this.score}`, width/2, height/2);
      text(`HighScore\n${getHighscore()}`, width/2, height/2 - 30);
    pop();
  }
}