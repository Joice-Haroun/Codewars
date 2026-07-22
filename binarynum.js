// codewarLink = https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = arr => {
  let str = arr.join('');
  let binarynum = parseInt(str,2)
  
  return binarynum; 
};
console.log(binaryArrayToNumber([1,0,1,1,0]))