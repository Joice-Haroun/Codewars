function longest(s1, s2) {
let newString = s1 + s2
let uniqueStr =  [...new Set(newString)].sort().join('')
return uniqueStr
}
console.log(longest("xdyie","iiehe"));