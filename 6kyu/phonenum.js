//Link https://www.codewars.com/kata/525f50e3b73515a6db000b83
 function createPhoneNumber(numbers){
let str= numbers.join("")
let first = str.slice(0,3)
let second = str.slice(3,6)
let third = str.slice(6)
return `(${first}) ${second}-${third}`
}
console.log(createPhoneNumber([1,3,6,7,3,9,5,1,1,7]))