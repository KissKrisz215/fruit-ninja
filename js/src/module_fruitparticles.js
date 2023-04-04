export class Particle {
  constructor(x,y,img,w,min){
    this.x = x;
    this.y = y;
    this.min = min;
    this.img = img;
    this.pos = createVector(0,0,0)
    this.vel = p5.Vector.random3D().normalize().mult(random(2,3));
    this.w = w
  }
  update(){
    this.pos.add(this.vel);
  }
  show(){
    push()
    translate(this.pos.x, this.pos.y, this.pos.z);
    image(this.img,this.x,this.y,this.w,this.w)
    this.w -= this.min
    pop();
  }
}

export function loadParticles(item){
  if(random(1) > 0.97){
      for(var i = 0; i < item.particleDensity; i++){
          item.particle = new Particle(item.splashedX, item.splashedY, item.particleImg,item.particleWidth,0.6);
        item.particles.push(item.particle)
      }
    }
    for(var i = item.particles.length - 1; i >= 0; i--){
      if(dist(item.particles[i].pos.x, item.particles[i].pos.y, item.particles[i].pos.z, 0,0,0) < item.particleRadius){
        item.particles[i].update()
        item.particles[i].show()
      }else{
        item.particles.splice(i,1)
      }
    }
    setTimeout(() => {
     },item.particleTiming)
}

export function loadSplash(item){
  tint(255, item.splashOpacity);
  item.splashOpacity4 -= 4;
  image(item.splashImg, item.splashedX, item.splashedY, 150,150);
  tint(255,255);
}