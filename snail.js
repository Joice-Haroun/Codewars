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
console.log(canSnailReachEnd(28,10,11))