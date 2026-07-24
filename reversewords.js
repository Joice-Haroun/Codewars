// CodewarLink: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
function reverseWords(str) {
let arr = str.split(" ")
let reversedArray = arr.map(word => word.split("").reverse().join(''))
return reversedArray.join(" ")
}
console.log(reverseWords("This is a nice place"))