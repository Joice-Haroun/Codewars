function toAcronym(inp){
let acc = inp.split(" ").map(word => word[0]).join("").toUpperCase()
  return acc
}
console.log(toAcronym("Kepler College"))
console.log(toAcronym('Finn church Aid'))