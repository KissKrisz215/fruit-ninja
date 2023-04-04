//Setts Color and Width for the blade
const touchTrailColor = 'rgba(170,221,255,100)';
const touchTrailThickness = 12;
const touchPointLife = 35;
const touchPoints = [];

export function renderBlade(){
  touchPoints.forEach(p => p.life -= 2);
  while (touchPoints[0] && touchPoints[0].life <= 0) {
    		touchPoints.shift();
    	}
	const touchPointCount = touchPoints.length;
	for (let i=1; i<touchPointCount; i++) {
		const current = touchPoints[i];
		const prev = touchPoints[i-1];
		const scale = current.life / touchPointLife;
    //Draw's line from current to previous positions
    push()
    stroke(touchTrailColor)
    strokeWeight(scale * touchTrailThickness)
    line(current.x, current.y, prev.x, prev.y);
    pop();
	} 
touchPoints.push({
   //Pushes mouse X and Y coordinates 
      x: mouseX,
      y: mouseY,
      life: touchPointLife
    })
}
