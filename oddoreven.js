// codewarLink https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
function oddOrEven(array) {
    let sum = array.reduce((accumulater,currentValue) => accumulater + currentValue,0)
if (sum % 2 === 0){
      return "even"
    }
else{
  return "odd"
}
  
}
console.log(oddOrEven([1,3,4,8]))