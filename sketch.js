let canvas;
let game, instructionsScreen;
let flySwatterImage, gameScreenBackgroundImage;
let bugImage1, bugImage2, bugImage3;

function preload() {
  // loading images
  flySwatterImage = loadImage("flyswatter.png");
  bugImage1 = loadImage("bug1.png");
  bugImage2 = loadImage("bug2.png");
  bugImage3 = loadImage("bug3.png");
  gameScreenBackgroundImage = loadImage("gameScreenBackground.png");
}

function setup() {
  canvas = createCanvas(400, 400);
  canvas.mousePressed(mousePressedInsideCanvas);

  // background Image
  image(gameScreenBackgroundImage, 0, 0);

  // resize flySwatter & bug images
  flySwatterImage.resize(80, 80);
  bugImage1.resize(50, 50);
  bugImage2.resize(50, 50);
  bugImage3.resize(50, 50);

  textAlign(CENTER);

  // displays Instruction Screen
  instructionsScreen = new InstructionsScreen();
}

function draw() {
  // game will stay as undefined until instructions screen's visible property becomes false
  if (game === undefined) {
    instructionsScreen.display();
    return;
  }

  // shows the game view
  image(gameScreenBackgroundImage, 0, 0);
  game.update();
  game.displayView();
}

function getHighscore() {
  return getItem("bughighscore") ?? "0";
}

function getBugHitGoal() {
  return getItem("bughitgoal") ?? "0";
}

function newBugHitGoal() {
  // bugHitGoal is 20% less than the highscore
  storeItem("bughitgoal", ceil((getHighscore() * 80) / 100));
}
