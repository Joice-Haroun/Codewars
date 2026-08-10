function findOdd(A) {
let counts = {};
for(let num of A){
  if(counts[num]){
    counts[num]++;
  }else{
    counts[num] = 1;
  }
}
for(let num in counts){
  if(counts[num] % 2 !== 0){
    return Number(num)
  }
}
}
console.log(findOdd([1,1,2,2,3,3,2,4,4]))