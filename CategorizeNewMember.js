// codewarLink https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
function openOrSenior(data){
let output = []
for(let person of data){
  let age = person[0];
  let handicap = person[1];
if (age >= 55 && handicap > 7){
  output.push("Senior")
}
else{
  output.push("Open")
}
}
  return output
}
console.log(openOrSenior([[58,8],[21,13],[43,21],[55,9]]))