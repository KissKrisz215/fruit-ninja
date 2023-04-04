export function renderSlice(item){
  if(item.rotation === 'right'){
      if(item.spin === 'minSpin' & item.randomX > 50 & item.randomX < 700){
        if(item.randomX !== item.randomX + 25 & item.reachedPoint === false){
          item.randomX += item.minSlide;
        }else{
          item.randomX += item.minSlide;
        }
      }else if(item.spin === 'maxSpin' & item.randomX > 50 & item.randomX < 700){
        if(item.randomX !== item.randomX + 25 & item.reachedPoint === false){
          item.randomX += item.maxSlide;
        }else{
          item.randomX += item.maxSlide;
        }
      }
      item.angle = item.angle + item.angleMaxRotate;
    }else if(item.rotation === 'left'){
      if(item.spin === 'minSpin' & item.randomX > 50 & item.randomX < 700){
        if(item.randomX !== item.randomX - 25 & item.reachedPoint === false){
          item.randomX -= item.minSlide;
        }
      }else if(item.spin === 'maxSpin' & item.randomX > 50 & item.randomX < 700){
        if(item.randomX !== item.randomX - 25 & item.reachedPoint === false){
          item.randomX -= item.maxSlide;
        }
      }
      item.angle = item.angle - item.angleMaxRotate;
    }
}