class FlySwatter
{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
    this.unixSecondsCreatedAt = Date.now()/1000;
    this.secondsUntilFadeOut = 0.25;
  }
  
  display()
  {
    image(flySwatterImage, this.x, this.y);
  }
  
  canBeRemoved()
  {
    // if it's been 1 seconds or more since FlySwatter was created, return true
    if((Date.now()/1000) - this.unixSecondsCreatedAt >= this.secondsUntilFadeOut)
    {
      return true;
    } return false;
  }
}