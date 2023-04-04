import { loadParticles } from "./module_fruitparticles.js";
import { loadSplash } from "./module_fruitparticles.js";
import { renderSlice } from "./module_fruitslice.js";
import { rotatefruit } from "./module_fruitslice.js";

export class fruit {
    constructor(type,name,topImg,bottomImg,splashImg,rotation,endYPos,spin,particleImg,particleWidth,particleRadius,particleDensity,timing,width,height){
       this.type = type;
       this.name = name;
       this.topImg = topImg;
       this.bottomImg = bottomImg;
       this.splashImg = splashImg;
       this.splashOpacity = 255;
       this.sliced = false;
       this.slicedY = 0;
       this.slicedTopX = 0;
       this.slicedBottomX = 0;
       this.splashedX = 0;
       this.splashedY = 0;
       this.rotation = rotation;
       this.endYPos = endYPos;
       this.startY = 850;
       this.reachedPoint = false;
       this.angle = 0;
       this.spin = spin;
       this.speed = -11.5;
       this.particles = [];
       this.particleImg = particleImg;
       this.angleMaxRotate = 4;
       this.angleMinRotate = 1.2;
       this.maxSlide = 2;
       this.minSlide = 1.5;
       this.slicedMaxSlide = 3.5;
       this.slicedMinSlide = 3;
       this.particleWidth = particleWidth;
       this.particleRadius = particleRadius;
       this.particleDensity = particleDensity;
       this.width = width;
       this.height = height;
       this.timing = timing;
       this.sound = 0;
    }
    renderParticles(){
        loadParticles(this);
    }
    renderSplash(){
        loadSplash(this);
    }
    renderSlice(){
        renderSlice(this);
    }
    rotate(){
        rotatefruit(this);
    }
}