function digitize(n) {
let revstr = n.toString().split("").reverse()
let result = []
for (str of revstr){
  let num = Number(str);
  result.push(num)
}
  return result
}
console.log(digitize(1367));
console.log(digitize(8434));
