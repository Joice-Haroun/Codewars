//codewarlink = https://www.codewars.com/kata/563cf89eb4747c5fb100001b
function removeSmallest(numbers) {
if(numbers.length === 0){
  return []
}
  let smallest = Math.min(...numbers);
  let index = numbers.indexOf(smallest);
  let firstPart = numbers.slice(0,index);
  let secondPart = numbers.slice(index+1)
  let result = [...firstPart,...secondPart]
  
  return result;
}
console.log(removeSmallest([5,4,3,1,2]))