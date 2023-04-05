import { loadParticles } from "./module_fruitparticles.js";
import { Particle } from "./module_fruitparticles.js";
import { fruit } from "./module_Fruit.js";
import { renderSlice } from "./module_fruitslice.js";
import { renderBlade } from "./module_blade.js";
import { game } from "./fruitgame.js";

window.setup = setup; 
window.draw = draw;
window.preload = preload;
let freezeOn = false;
let spawnTime = 60;
let critical5;
let critical10;
let bombSound;
let criticalSound;
let frozenOverlay;
let greenParticle;
let timer = 6;
let freezeOut = 255;
let lightyellowParticle;
let darkyellowParticle;
let redParticle;
let whiteParticle;
let starParticle;
let starFruitParticle;
let iceParticle;
let bg;
let specificFont;
let freezeIcon;
let title;
let iconClassic;
let iconSettings;
let iconZen;
let peachImg;
let peachTop;
let peachBottom;
let peachSplash;
let melonImg;
let melonTop
let melonBottom;
let melonSplash;
let appleImg;
let appleTop;
let appleBottom;
let appleSplash;
let bananaImg;
let bananaSplash;
let strawberryImg;
let strawberryTop;
let strawberryBottom;
let strawberrySplash;
let bananaTop;
let bananaBottom;
let volBtn;
let settingImg;
let score;
let startGame;
let musicBtn;
let mutedMusicBtn;
let volMuted;
let bombImg;
let mutedVolBtn;
let go;
let goShow = true;
let gameLife3;
let gameLife2;
let gameLife1;
let gameLife0;
let gameOverImg;
let musicMuted;
let isSettings = false;
let isMusicMuted = true;
let isSoundMuted = true;
let gameOver = false;
let gravity = 0.1;
let starFruitImg;
let starFruitTop;
let starFruitBottom;
let miss;
let song;
let playSound = false;
let sliceSound;
let dragonFruitImg;
let dragonFruitTop;
let dragonFruitBottom;
let dragonFruitSplash;
let coconutImg;
let coconutTop;
let coconutBottom;
let coconutSplash;
let freezeBananaImg;
let freezeBananaTop;
let freezebananaBottom;
let pineAppleImg;
let pineAppleTop;
let pineappleBottom;
let pineAppleSplash;
let fruitCombo;
let showScore;
let iconQuit;
let iconRetry;
let fruitCounter = 0;
let timerMin;
let fruitSplash1 = false;
let fruitSplash2 = false;
let fruitSplash3 = false;
let fruitNinja;

function preload(){
  song = loadSound('./assets/audio/background-music.mp3');
  bombSound = loadSound('./assets/audio/bomb-explode.mp3');
  criticalSound = loadSound('./assets/audio/critical.mp3');
  sliceSound = loadSound('./assets/audio/splash.mp3');
  specificFont = loadFont('./assets/fonts/go3v2.ttf');
  bg = loadImage('./assets/img/backgrounds/background-image.jpg');
  title = loadImage('./assets/img/backgrounds/gametitle.png');
  iconClassic = loadImage('./assets/img/icons/menu/icon-classic.png');
  iconSettings = loadImage('./assets/img/icons/menu/icon-settings.png');
  iconZen = loadImage('./assets/img/icons/menu/icon-zen.png');
  frozenOverlay = loadImage('./assets/img/backgrounds/frozen-overlay.png')
  iconQuit = loadImage('./assets/img/icons/menu/icon-quit.png');
  iconRetry = loadImage('./assets/img/icons/menu/icon-retry.png');
  showScore = loadImage('./assets/img/icons/score/showScore.png');
  critical5 = loadImage('./assets/img/icons/score/critical5.png');
  critical10 = loadImage('./assets/img/icons/score/critical10.png');
  freezeIcon = loadImage('./assets/img/icons/freeze-icon.png')
  greenParticle = loadImage('./assets/img/fruits/particles/green-particle.png');
  lightyellowParticle = loadImage('./assets//img/fruits/particles/lightyellow-particle.png');
  darkyellowParticle = loadImage('./assets/img/fruits/particles/darkyellow-particle.png')
  redParticle = loadImage('./assets/img/fruits/particles/red-particle.png');
  whiteParticle = loadImage('./assets/img/fruits/particles/white-particle.png');
  starParticle = loadImage('./assets/img/fruits/particles/star-particle.png')
  iceParticle = loadImage('./assets/img/fruits/particles/ice-particle.png');
  starFruitParticle = loadImage('./assets/img/fruits/particles/starfruit-particle.png')
  pineAppleImg = loadImage('./assets/img/fruits/Pineapple.png');
  pineAppleTop = loadImage('./assets/img/fruits/pineapple-top.png');
  pineappleBottom = loadImage('./assets/img/fruits/pineapple-bottom.png');
  pineAppleSplash = loadImage('./assets/img/fruits/pineapple-splash.png');
  freezeBananaImg = loadImage('./assets/img/fruits/Freeze_Banana.png');
  freezeBananaTop = loadImage('./assets/img/fruits/Freeze_BananaTop.png');
  freezebananaBottom = loadImage('./assets/img/fruits/Freeze_BananaBottom.png')
  starFruitImg = loadImage('./assets/img/fruits/Starfruit.png');
  starFruitTop = loadImage('./assets/img/fruits/starfruit-top.png')
  starFruitBottom = loadImage('./assets/img/fruits/starfruit-bottom.png')
  dragonFruitImg = loadImage('./assets/img/fruits/Dragon-fruit.png');
  dragonFruitTop = loadImage('./assets/img/fruits/dragonfruit-top.png');
  dragonFruitBottom = loadImage('./assets/img/fruits/dragonfruit-bottom.png');
  dragonFruitSplash = loadImage('./assets/img/fruits/dragonfruit-splash.png');
  coconutImg = loadImage('./assets/img/fruits/Coconut.png');
  coconutTop = loadImage('./assets/img/fruits/coconut-top.png');
  coconutBottom = loadImage('./assets/img/fruits/coconut-bottom.png');
  coconutSplash = loadImage('./assets/img/fruits/coconut-splash.png');
  peachImg = loadImage('./assets/img/fruits/peach.png');
  peachTop = loadImage('./assets/img/fruits/peach-top.png');
  peachBottom = loadImage('./assets/img/fruits/peach-bottom.png');
  peachSplash = loadImage('./assets/img/fruits/peach-splash.png')
  melonImg = loadImage('./assets/img/fruits/melon.png');
  melonTop = loadImage('./assets/img/fruits/melon-top.png');
  melonBottom = loadImage('./assets/img/fruits/melon-bottom.png');
  melonSplash = loadImage('./assets/img/fruits/melon-splash.png');
  appleImg = loadImage('./assets/img/fruits/apple.png');
  appleTop = loadImage('./assets/img/fruits/apple-top.png');
  appleBottom = loadImage('./assets/img/fruits/apple-bottom.png');
  appleSplash = loadImage('./assets/img/fruits/apple-splash.png');
  strawberryImg = loadImage('./assets/img/fruits/strawberry.png');
  strawberryTop = loadImage('./assets/img/fruits/strawberry-top.png');
  strawberryBottom = loadImage('./assets/img/fruits/strawberry-bottom.png');
  strawberrySplash = loadImage('./assets/img/fruits/strawberry-splash.png');
  bananaTop = loadImage('./assets/img/fruits/banana-top.png');
  bananaBottom = loadImage('./assets/img/fruits/banana-bottom.png');
  bananaImg = loadImage('./assets/img/fruits/Banana.png');
  bananaSplash = loadImage('./assets/img/fruits/banana-splash.png')
  bombImg = loadImage('./assets/img/fruits/bomb.png')
  score = loadImage('./assets/img/fruits/score.png');
  gameLife3 = loadImage('./assets/img/icons/score/gamelife-3.png');
  gameLife2 = loadImage('./assets/img/icons/score/gamelife-2.png');
  gameLife1 = loadImage('./assets/img/icons/score/gamelife-1.png');
  gameLife0 = loadImage('./assets/img/icons/score/gamelife-0.png');
  musicBtn = loadImage('./assets/img/buttons/music-btn.png');
  musicMuted = loadImage('./assets/img/buttons/music-muted.png')
  settingImg = loadImage('./assets/img/icons/menu/menu.png');
  gameOverImg = loadImage('./assets/img/icons/gameover.png');
  miss = loadImage('./assets/img/icons/score/miss.png')
  go = loadImage('./assets/img/icons/go.png')
}

function setup() {
  createCanvas(1000, 800);
 angleMode(DEGREES);
}

export {specificFont,miss,go,gameOverImg,score,gameLife0,gameLife1,gameLife2,gameLife3,bombImg,settingImg,bg,title,iconClassic,iconSettings,iconZen,frozenOverlay,iconQuit,iconRetry,showScore,critical5,critical10,freezeIcon,greenParticle,lightyellowParticle,darkyellowParticle,redParticle,whiteParticle,starFruitParticle,starParticle,iceParticle,bananaImg,bananaBottom,bananaTop,bananaSplash,appleImg,appleTop,appleBottom,appleSplash,peachImg,peachTop,peachBottom,peachSplash,melonImg,melonTop,melonBottom,melonSplash,pineAppleImg,pineAppleTop,pineappleBottom,pineAppleSplash,coconutImg,coconutTop,coconutBottom,coconutSplash,strawberryImg,strawberryTop,strawberryBottom,strawberrySplash,freezeBananaImg,freezeBananaTop,freezebananaBottom,starFruitImg,starFruitTop,starFruitBottom,dragonFruitImg,dragonFruitTop,dragonFruitBottom,dragonFruitSplash}

function draw(){
  if(fruitNinja.gameType === 'gamestart'){
    goShow = true;
    fruitNinja.gameScore = 0;
    imageMode(CORNER)
    background(bg);
    image(title, 0, 0, width + 200, 600);
    //Generates Menu for 'gamestart'
    fruitNinja.generateMenu();
    if (mouseIsPressed === true) {
      renderBlade();
    //Checks if settings was swiped by the user
    if(mouseY > 415 & mouseY < 490 & mouseX > 715 & mouseX < 785){
      fruitNinja.menuFruitsArray[1].fruit.sliced = true;
      if(playSound === true){
        sliceSound.play();
      }
      setTimeout(() => {
    isSettings = true;
    fruitNinja.menuFruitsArray[1].fruit.sliced = false;
      }, 500)
    }
    //Checks if Classic Mode was swiped by the user
    if(mouseY > 415 & mouseY < 490 & mouseX > 455 & mouseX < 515){
      fruitNinja.menuFruitsArray[0].fruit.sliced = true;
      if(playSound === true){
        sliceSound.play();
      }
      setTimeout(() => {
        fruitNinja.gameType = 'game'
        fruitNinja.gameMode = "Classic"
        fruitNinja.menuFruitsArray[0].fruit.sliced = false;
      }, 1000)
    }
    //Checks if Zen Mode was swiped by the user
    
    if(mouseY > 415 & mouseY < 485 & mouseX > 165 & mouseX < 235){
      fruitNinja.menuFruitsArray[2].fruit.sliced = true;
      if(playSound === true){
        sliceSound.play();
      }
      setTimeout(() => {
        fruitNinja.gameType = 'game'
        fruitNinja.gameMode = "Zen"
        fruitNinja.menuFruitsArray[2].fruit.sliced = false;
      }, 1000)
    }
  }
    //Checks if user wants to close the menu window
    if(isSettings === true){
      let musicWidth = 110;
      let musicX = 650;
      //Added Event Listener for 'ESC'
      window.addEventListener('keydown', (event) => {
        if(event.keyCode === 27){
          isSettings = false;
        }
      })
         //Added Event Listener for 'click'
    window.addEventListener("click", () => {
      if(mouseX < 150 || mouseX > 800 || mouseY < 150 || mouseY > 700){
        isSettings = false;
      }
    });
    }
}
}