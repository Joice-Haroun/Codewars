function findUniq(arr) {
for(let digit of arr){
let result = arr.filter(number => number === digit);
if(result.length === 1){
return digit }
}
}
console.log(findUniq([2,2,5,2]))