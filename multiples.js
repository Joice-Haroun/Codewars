// link
function solution(number){
let result = []
for (let i = 1; i < number; i++) {
  if (i % 3 === 0  || i % 5 === 0) {
    result.push(i); 
  }
} 
let sum = result.reduce((accumlater,currentValue) => accumlater + currentValue,0)
return sum
}