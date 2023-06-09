import { fruit } from "./module_Fruit.js";
import {specificFont,miss,go,gameOverImg,score,gameLife0,gameLife1,gameLife2,gameLife3,bombImg,settingImg,bg,title,iconClassic,iconSettings,iconZen,frozenOverlay,iconQuit,iconRetry,showScore,critical5,critical10,freezeIcon,greenParticle,lightyellowParticle,darkyellowParticle,redParticle,whiteParticle,starFruitParticle,starParticle,iceParticle,bananaImg,bananaBottom,bananaTop,bananaSplash,appleImg,appleTop,appleBottom,appleSplash,peachImg,peachTop,peachBottom,peachSplash,melonImg,melonTop,melonBottom,melonSplash,pineAppleImg,pineAppleTop,pineappleBottom,pineAppleSplash,coconutImg,coconutTop,coconutBottom,coconutSplash,strawberryImg,strawberryTop,strawberryBottom,strawberrySplash,freezeBananaImg,freezeBananaTop,freezebananaBottom,starFruitImg,starFruitTop,starFruitBottom,dragonFruitImg,dragonFruitTop,dragonFruitBottom,dragonFruitSplash} from './main.js'
import { renderBlade } from "./module_blade.js";
import { renderSlice } from "./module_fruitslice.js";

export class game {
    constructor(newGame){
        this.apple = new fruit(appleImg,'apple', appleTop, appleBottom, appleSplash,'right',300,'minSpin', greenParticle,25,120,40,1500,120,120);
        this.melon = new fruit(melonImg, 'melon', melonTop, melonBottom, melonSplash, 'right', 300, 'minSpin', redParticle,25,120,40,1500,120,120);
        this.strawberry = new fruit(strawberryImg, 'strawberry', strawberryTop, strawberryBottom, strawberrySplash,'right',155,'minSpin',redParticle,25,120,40,1500,120,120);
        this.bomb = new fruit(bombImg, 'bomb',null,null,null,'right',300,'minSpin',starParticle,40,700,150,3000,120,120);
        this.dragonFruit = new fruit(dragonFruitImg, 'dragonfruit', dragonFruitTop, dragonFruitBottom, dragonFruitSplash,'right',300,'minSpin',redParticle,25,120,40,1500,110,120);
        this.coconut = new fruit(coconutImg, 'coconut', coconutTop, coconutBottom, coconutSplash,'right',300,'minSpin',whiteParticle,25,120,40,1500,120,110);
        this.peach = new fruit(peachImg, 'peach',peachTop, peachBottom, peachSplash, 'right', 300, 'minSpin', darkyellowParticle,25,120,40,1500,120,120);
        this.pineapple = new fruit(pineAppleImg, 'pineapple', pineAppleTop, pineappleBottom, pineAppleSplash,'left', 300, 'maxSpin', lightyellowParticle,25,120,40,1500,140,180);
        this.freezebanana = new fruit(freezeBananaImg, 'freezebanana', freezeBananaTop, freezebananaBottom,null,'left',300,'maxSpin', iceParticle,25,120,40,1500,90,140);
        this.banana = new fruit(bananaImg, 'banana', bananaTop, bananaBottom,bananaSplash, 'right',300,'maxSpin',lightyellowParticle,25,120,40,1500,90,140);
        this.starfruit = new fruit(starFruitImg, 'starfruit', starFruitTop, starFruitBottom,appleSplash,'right',300,'minSpin',starFruitParticle,25,120,40,1500,120,120);
        this.rotation = ['left','right'];
        this.spin = ['minSpin', 'maxSpin', 'noSpin'];
        this.fruitArray = [];
        this.missedFruits = [];
        this.angle = 0;
        this.gameScore = 0;
        this.bestScore = localStorage.getItem("bestScore") || 0;
        this.playerHealth = 4;
        this.gameOver = false;
        this.gameOverCounter = 0;
        this.gameMode = "";
        this.gameType = "gamestart"
        this.freezeSpawnTime = 0;
        this.menuFruitsList = [];
        this.menuFruits = [this.apple ,this.peach, this.melon,this.coconut,this.strawberry];
      this.gameOverFruits = [{game: iconRetry, x: 270, y: 690, circleHeight:160, circleWidth: 160, fruitHeight: 70, fruitWidth:70, angle: 0},{game: iconQuit, x: 750, y: 690, circleHeight:160, circleWidth: 160, fruitHeight: 70,fruitWidth:70, angle: 0}]
        this.menuFruitsArray = [{game: iconClassic, x: 480, y: 480, circleHeight: 250,circleWidth:250,fruitHeight: 100, fruitWidth: 100,angle: 0},
        {game: iconSettings,x: 750, y: 450, circleHeight: 250,circleWidth:250,fruitHeight: 100, fruitWidth: 100,angle: 0},
        {game: iconZen,x: 200, y: 450, circleHeight: 250,circleWidth:250,fruitHeight: 100, fruitWidth: 100,angle: 0}];
    }
    generateMenu(){
        this.menuFruitsArray.forEach((item) => {
            if(item.fruit === undefined){
                  this.generateRandomFruit(item,this.menuFruitsArray);
                this.checkDuplicates(item,this.menuFruitsArray)
            }else if(item.fruit.sliced === false){
                item.fruit.slicedX = item.x;
                item.fruit.slicedY = item.y;
                item.fruit.splashedY = item.y;
                item.fruit.randomX = item.x
                item.fruit.splashedX = item.fruit.randomX;
                item.fruit.endYPos = item.y - 150;
                item.fruit.startY = item.y;
                item.fruit.speed = -2.5;
                push()
                translate(item.x,item.y);
                rotate(item.angle);
                imageMode(CENTER);
                image(item.game,0,0,item.circleWidth,item.circleHeight);
                image(item.fruit.type,0,0,item.fruitWidth,item.fruitHeight);
                
                pop()
                item.angle += 0.9;
            }else if(item.fruit.sliced === true){
                item.fruit.renderSplash();
                item.fruit.renderSlice();
                item.fruit.renderParticles();
                push()
                translate(item.x,item.y);
                rotate(item.angle);
                imageMode(CENTER);
                image(item.game,0,0,item.circleWidth,item.circleHeight);
                pop();
                push();
                translate(item.fruit.randomX, item.fruit.startY);
                rotate(item.fruit.angle);
                imageMode(CENTER);
                image(item.fruit.topImg, 0,0, 130,110);
                pop()
                push();
                translate(item.fruit.slicedX, item.fruit.startY);
                rotate(item.fruit.angle);
                imageMode(CENTER);
                image(item.fruit.bottomImg, 0,0, 130,110);
                pop()
                item.angle += 0.9;
                if(item.fruit.startY > item.fruit.endYPos){
                    item.fruit.startY = item.fruit.startY + item.fruit.speed;
                    item.fruit.speed = item.fruit.speed + 0.2;
                }
            }
        })
    }
    checkDuplicates(item,array){
        this.menuFruitsArray.forEach((item,index) => {
           if(item.fruit){
            for(let i = index + 1; i < array.length; i++){
                if(array[i].fruit){
                    if(array[i].fruit.name === item.fruit.name){
                       delete array[i].fruit
                    }
                }
            }
            
           }
        })
    }
    renderGameOver(){
        let finalScore = this.gameScore.toString();
        imageMode(CORNER)
        background(bg);
        image(showScore, 0, 60, 1000, 600);
        textSize(230)
        fill(235, 173, 39)
        if(finalScore.length <= 1){
            text(this.gameScore, 435,430) 
        }else if(finalScore.length === 2){
            text(this.gameScore, 380,430) 
        }else if(finalScore.length === 3){
            text(this.gameScore, 310,430) 
        }else if(finalScore.length === 4){
            text(this.gameScore, 250,430) 
        }else{
            text(this.gameScore, 180,430) 
        }
        this.gameOverFruits.forEach((item) => {       
            if(item.fruit === undefined){
                this.generateRandomFruit(item)
            }else{
                push()
                if (mouseIsPressed === true) {
                    renderBlade();
                }
                translate(item.x,item.y);
                rotate(item.angle);
                imageMode(CENTER);
                image(item.game,0,0,item.circleWidth,item.circleHeight);
                image(item.fruit.type,0,0,item.fruitWidth,item.fruitHeight);
                // item.fruit.renderSplash();
                pop()
                item.angle += 0.9; 
            }
        })
    }
    generateRandomFruit(item,array){
        let randomNumber = Math.round(Math.random() * this.menuFruits.length - 1);
        let fruits = this.menuFruits[randomNumber]
        item.fruit = fruits;
    }
    displayScore(){
        textSize(60)
        fill(255, 215, 0)
        text(this.gameScore, 130,65)
        textSize(40)
        //Display Best Score
        text("BEST:",55,130)
        textFont(specificFont)
        text(this.bestScore, 160,130);
        //Displays current Score
        image(score, 45,15,70,70)
        if(this.playerHealth === 4){
            image(gameLife3, 750,15,200,100)
        }else if(this.playerHealth === 3){
            image(gameLife2, 750,15,200,100)
        }else if(this.playerHealth === 2){
            image(gameLife1, 750,15,200,100)
        }else if(this.playerHealth <= 1){
            image(gameLife0, 750,15,200,100)
            image(gameOverImg, 240, 300, 550, 200)
            this.gameOver = true;
        }
        }
        renderFruits(){
            this.addFruits();
           if(this.gameMode === 'Zen'){
            //Declares fruit's for 'Zen' Game Mode
            this.zenFruits = [this.freezebanana, this.banana, this.peach, this.melon, this.strawberry, this.bomb, this.starfruit, this.dragonFruit, this.coconut,this.pineapple];
            this.fruits = this.zenFruits;
           }else if(this.gameMode === 'Classic'){
            //Declares fruit's for 'Classic' Game Mode
            this.classicFruits = [this.banana, this.apple, this.peach, this.melon, this.strawberry, this.bomb, this.dragonFruit, this.starfruit, this.pineapple];
            this.fruits = this.classicFruits;
           }
           let randomSpin = this.spin[Math.floor(Math.random() * this.spin.length)];
           let randomRotation = this.rotation[Math.floor(Math.random() * this.rotation.length)];
             let randomY = Math.floor(Math.random() * (300 - 120) + 200);
             let randomX = Math.floor(Math.random() * (750 - 100) + 100);
             let randomGenNumber = Math.floor(Math.random() * (4, 9)); 
             let randomFruit = Math.floor(Math.random() * this.fruits.length);
              if(this.fruits[randomFruit].name === 'freezebanana'){
               let result = this.fruitArray.find(item => item.name === 'freezebanana')
               if(result === undefined & this.freezeSpawnTime % randomGenNumber === 0){
                
               }else{
                 randomFruit = Math.floor(Math.random() * (1, this.fruits.length));
               }
              }
              this.freezeSpawnTime++;
           
           
              
           // Pushes random fruits to the fruitArray
             if(this.gameType === 'game'){
               if(this.fruitArray.length < 15){
                //Generates random fruit with random properties
                 let fruit = this.fruits[randomFruit];
                 fruit.randomX = randomX;
                 fruit.spin = randomSpin;
                 fruit.endYPos = randomY;
                 fruit.rotation = randomRotation;
                 this.fruitArray.push(fruit);
               }
             }
        }
        addFruits(){
            this.apple = new fruit(appleImg,'apple', appleTop, appleBottom, appleSplash,'right',300,'minSpin', greenParticle,25,120,40,1500,120,120);
            this.melon = new fruit(melonImg, 'melon', melonTop, melonBottom, melonSplash, 'right', 300, 'minSpin', redParticle,25,120,40,1500,120,120);
            this.strawberry = new fruit(strawberryImg, 'strawberry', strawberryTop, strawberryBottom, strawberrySplash,'right',155,'minSpin',redParticle,25,120,40,1500,120,120);
            this.bomb = new fruit(bombImg, 'bomb',null,null,null,'right',300,'minSpin',starParticle,40,700,150,3000,120,120);
            this.dragonFruit = new fruit(dragonFruitImg, 'dragonfruit', dragonFruitTop, dragonFruitBottom, dragonFruitSplash,'right',155,'minSpin',redParticle,25,120,40,1500,110,120);
            this.coconut = new fruit(coconutImg, 'coconut', coconutTop, coconutBottom, coconutSplash,'right',300,'minSpin',whiteParticle,25,120,40,1500,120,110);
            this.peach = new fruit(peachImg, 'peach',peachTop, peachBottom, peachSplash, 'right', 300, 'minSpin', darkyellowParticle,25,120,40,1500,120,120);
            this.pineapple = new fruit(pineAppleImg, 'pineapple', pineAppleTop, pineappleBottom, pineAppleSplash,'left', 300, 'maxSpin', lightyellowParticle,25,120,40,1500,140,180);
            this.freezebanana = new fruit(freezeBananaImg, 'freezebanana', freezeBananaTop, freezebananaBottom,null,'left',300,'maxSpin', iceParticle,25,120,40,1500,90,140);
            this.banana = new fruit(bananaImg, 'banana', bananaTop, bananaBottom,bananaSplash, 'right',300,'maxSpin',lightyellowParticle,25,120,40,1500,90,140);
            this.starfruit = new fruit(starFruitImg, 'starfruit', starFruitTop, starFruitBottom,appleSplash,'right',300,'minSpin',starFruitParticle,25,120,40,1500,120,120);
        }
        showMissed(){
            this.missedFruits.forEach((item,index) => {
                push()
                tint(255, item[1]);
                item[1] -= 2;
                image(miss, item[0], 720, 80, 80);
                pop()
                if(item[1]  <= 0){
                  this.missedFruits.splice(index,1);
                }
              },10)
        }
}