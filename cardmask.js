function maskify(str) {
if(str.length <= 4){
  return str
}
let hidden = '#'.repeat(str.length-4)
let appear = str.slice(str.length-4) 
return hidden + appear

}
console.log(maskify("1234567789"))