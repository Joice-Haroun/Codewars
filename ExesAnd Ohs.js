function XO(str) {
str = str.toLowerCase();
let countX = str.split("x").length-1
let countO = str.split("o").length-1
return countX === countO ? true : false
}
console.log(XO("xohm"))
console.log(XO("xox"))
