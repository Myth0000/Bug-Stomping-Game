class Screen {
  constructor() {
    this.score = 0;
    this.highscore = 0;
    this.timelimit = 10;
    this.timer = this.timelimit;
    this.bugHitGoal = getBugHitGoal();
    this.txt = "";
  }
}
