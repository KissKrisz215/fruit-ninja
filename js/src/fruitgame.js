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
}