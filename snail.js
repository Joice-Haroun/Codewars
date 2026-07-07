function canSnailReachEnd(length, speed, lengthIncreases) {
if(speed <= lengthIncreases){
  return false;
}
let minuties = length/(speed - lengthIncreases)
if (minuties <= 525600){
    return true ;
  }
  return false;
}