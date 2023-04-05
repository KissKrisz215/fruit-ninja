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
    image(settingImg,150,150,700,600);
    //Checks if user clicked on the mute/unmute button
     if (mouseIsPressed) {
      if(mouseX > 610 & mouseX < 720 & mouseY > 210 & mouseY < 295){
        if(isMusicMuted === true){
          isMusicMuted = false;
          playSound = true;
          song.play();
        }else if(isMusicMuted === false){
          isMusicMuted = true;
          playSound = false;
          song.stop();
        }
      }
    }
    if(isMusicMuted === false){
      image(musicBtn,660,250,100,80)
    }else{
      image(musicMuted,670,260,80,70)
    }
    }
//Check if the game has already been started
}else if(fruitNinja.gameType === 'game'){
  spawnTime
  function splashedItem(item,isBomb){
    //Check's if the sliced item is not a bomb
    if(isBomb === false){
      if(item.name === 'starfruit'){
        //If the item is "starfruit" renders critical points
        tint(255, item.splashOpacity);
        item.splashOpacity -= 3.5;
       image(critical10, item.splashedX, item.splashedY - 50, 200, 200);
       tint(255, 255); 
       if(item.sound < 1 & playSound === true){
        item.sound++;
        criticalSound.play()
      }
      setTimeout(() => {
        criticalSound.stop();
      },1500)
      }else if(item.name === 'dragonfruit'){
        //If the item is "starfruit" renders critical points
        tint(255, item.splashOpacity);
        item.splashOpacity -= 3.5;
       image(critical5, item.splashedX, item.splashedY - 50, 200, 200);
       tint(255, 255); 
       if(item.sound < 1 & playSound === true){
        item.sound++;
        criticalSound.play()
      }
      setTimeout(() => {
        criticalSound.stop();
      },1500)
      }else if(item.name === 'freezebanana' & timer >= 0){
        //If item is a "freezebanana" sets freezeMode
        fruitNinja.fruitArray.forEach((item) => {
          //Loops trough each item and lower the value's
          item.angleMaxRotate = 0.6
          item.minSlide = 0.3;
          item.maxSlide = 0.5;
          item.slicedMinSlide = 0.3;
          item.slicedMaxSlide = 0.3;
        })
        tint(255, item.splashOpacity);
        item.splashOpacity -= 20;
       tint(400, 400);
       fill(58, 184, 3);
       textSize(100);
       if(timer === 6){
        countDown();
       } //Display the Overlay and FreezeOut Icon
       text(Math.round(timer), 450, 150);
       tint(255, freezeOut);
       image(frozenOverlay, 0,0, 1000, 800); 
       freezeOut -= 0.2;
       tint(255,255);
       image(freezeIcon,350, 0, 250, 90)
       //Check if the item has reached it's Y coordinate
       fruitNinja.fruitArray.forEach((item) => {
        if(item.startY > item.endYPos){
          //If it is not reached changed the subtract from the speed
          item.speed = -0.6
        }else{
          //If is reached it adds to the speed
          item.speed = +0.6;
        }
        gravity = 0.1;
        if(item.sliced === false & item.startY < 800){}
       spawnTime = 180;
       })
      }
      else if(item.name !== 'freezebanana'){
        item.renderSplash();
      }
//Display the fruit's Sliced 'Top' image
push();
translate(item.slicedTopX, item.slicedY);
rotate(item.angle);
imageMode(CENTER);
image(item.topImg, 0,0, 130,110);
pop()
//Display the fruit's Sliced 'Bottom' image
push();
translate(item.slicedBottomX, item.slicedY);
rotate(item.angle);
imageMode(CENTER);
image(item.bottomImg, 0,0, 130,110);
pop()
//Increment's the Y coordinate
item.slicedY += item.speed;
item.speed = item.speed + gravity;
//Increment X coordinate for the Splashed Top/Bottom
item.slicedTopX -= item.slicedMinSlide;
item.slicedBottomX += item.slicedMaxSlide;
if(item.particles !== undefined){
loadParticles(item)
}
 //Generates Particles for the bomb
    }else if(isBomb === true){
      if(item.particles !== undefined){
      item.renderParticles();
      if(item.sound < 1 & playSound === true){
        item.sound++;
        bombSound.play();
      }
      setTimeout(() => {
        bombSound.stop();
      },4000)
        setTimeout(() => {
          delete item.particle;
          fruitNinja.playerHealth = 0;
         },3500)  
    }
    }
  }
  let setFruitRendering;
  function fruitsRendering(){
    if(fruitNinja.gameMode === 'Zen' || fruitNinja.gameMode === 'Classic'){
      //Render random fruit's when the game is started
      fruitNinja.renderFruits();
    }
   }
   ++fruitCounter;
   //Calls fruitRendering based on set spawnTime
   if(fruitCounter % spawnTime === 0 & fruitNinja.gameOver === false){
    fruitsRendering()
   }else if(fruitCounter % 350 === 0){
    fruitsRendering()
    setTimeout(() => {
      fruitsRendering()
    },500)
   }
     //Check if "GameOver" is true
     if(fruitNinja.gameOver === true){
      if(fruitNinja.gameOverCounter < 1){
        setTimeout(() => {
          fruitNinja.gameType = "gameOver";
        }, 4500);
        fruitNinja.gameOverCounter++;
      }
    }
    background(bg);
    if( fruitNinja.fruitArray.length === 0){
      //Display Score
      fruitNinja.displayScore();
    }else{
       //Display Score
       fruitNinja.displayScore();

       //Display fruit's that hasn't been sliced
       fruitNinja.showMissed();
       fruitNinja.fruitArray.forEach((item,index) => {
        
         //Check if the user has swiped the fruit
         if (mouseIsPressed === true) {
          if(item.startY -95 < mouseY & item.startY + 95 > mouseY & item.randomX - 95 < mouseX & item.randomX +95 > mouseX & item.sliced === false){
            //If true display sound
            if(playSound === true){
              sliceSound.play();
              setTimeout(() => {
                sliceSound.stop();
              },1500)
            }
           
            item.sliced = true;
            //If the item is a "starfruit" add 10 point's
            if(item.name === 'starfruit'){
              fruitNinja.gameScore += 10;
            }
            else if(item.name === 'dragonfruit'){
              fruitNinja.gameScore += 5;
            }else{
              //Else add 1 point
              fruitNinja.gameScore += 1;
            }
            //Sets fruit's splash properties
            item.splashedX = item.randomX;
            item.splashedY = item.startY ;
            item.slicedTopX += item.splashedX + 15;
            item.slicedBottomX += item.splashedX -20;
            item.slicedY += item.splashedY;
            //Checks for BestScore
            if(fruitNinja.gameScore > fruitNinja.bestScore){
              fruitNinja.bestScore = fruitNinja.gameScore;
              localStorage.setItem("bestScore", fruitNinja.bestScore);
            }
          }
          }
           //Check's if fruit has reached it's Y coordinate
           if(item.startY > item.endYPos  & item.reachedPoint === false){
             if(item.sliced === false){
              item.rotate();
             }
             //Check if fruit is a Bomb
             else if(item.sliced === true){
              if(item.name !== 'bomb'){
                splashedItem(item,false);
              }else if(item.name === 'bomb'){
                splashedItem(item,true);
              }
              //Removes fruit from fruitArray
              if(item.startY > 850){
                fruitNinja.fruitArray.splice(index,1)
              }
             }
             //Renders slice for fruit
            item.renderSlice();
            item.startY = item.startY + item.speed;
            item.speed = item.speed + gravity;
  
           }else{
            item.reachedPoint = true;
            if(item.sliced === false & item.startY < 800){
              item.rotate();
  
             } else if(item.startY.toFixed(0) > 800 & item.sliced === false){
              //Check's if fruit has got back without the user swiping it
              if(item.name !== 'bomb'){
               //Decrement's player health
                --fruitNinja.playerHealth;
                //Displays missed Icon
                fruitNinja.missedFruits.push([item.randomX,255]);
              }
              //Removes the fruit from FruitArray
              fruitNinja.fruitArray.splice(index,1);
           }
           //Checks if the item is sliced
             else if(item.sliced === true){
              if(item.name !== 'bomb'){
                splashedItem(item,false);
              }else if(item.name === 'bomb'){
                splashedItem(item,true);
              }
              //If the freezebanana has got back resets the timer
              if(item.startY > 850){
                if(item.name === 'freezebanana'){
                  clearInterval(timerMin);
                  timer = 6;
                }
                fruitNinja.fruitArray.splice(index,1)
              }
             }
            item.renderSlice();
            item.startY = item.startY + item.speed;
            item.speed = item.speed + gravity;
  
           }
        })
    }
    if(goShow === true){
      //Display go icon
      image(go, 330,250,350,250);
    }else{
    }
    setTimeout(() => {
      goShow = false;
    }, 700)
   //Display Mouse Blade
   if (mouseIsPressed === true) {
    renderBlade();
  }

}else if(fruitNinja.gameType === "gameOver"){
    fruitNinja.renderGameOver();
    if (mouseIsPressed === true) {

    //Checks if user swiped "retry" button
    if(mouseX > 235 & mouseX < 305 & mouseY > 655 & mouseY < 725){

      fruitNinja.playerHealth = 4;
      fruitNinja.gameOver = false;
      fruitNinja.gameScore = 0;
      fruitNinja.fruitArray.splice(0, fruitNinja.fruitArray.length);
      fruitNinja.missedFruits.splice(0, fruitNinja.missedFruits.length);
      fruitNinja.gameType = 'game';
      fruitNinja.gameOverCounter = 0;
      goShow = true;
    //Checks if user swiped "quit" button
  }else if(mouseX > 670 & mouseX < 830 & mouseY > 610 & mouseY < 770){
    fruitNinja.playerHealth = 4;
    fruitNinja.gameOver = false;
    fruitNinja.gameScore = 0;
    fruitNinja.fruitArray.splice(0, fruitNinja.fruitArray.length);
    fruitNinja.missedFruits.splice(0, fruitNinja.missedFruits.length);
    fruitNinja.gameType = 'gamestart';
    fruitNinja.gameOverCounter = 0;
  }
  }
}
}