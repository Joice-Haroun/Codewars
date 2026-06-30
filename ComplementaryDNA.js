function dnaStrand(dna){
let finalWord = "";
for(strand of dna){
  let letter = strand;
switch (letter){
    case "A":
    finalWord +=  "T";
      break;
    case "T":
      finalWord += "A";
      break;
    case "C": 
      finalWord += "G";
      break;
    case "G":
      finalWord += "C";
      break;
    default:
        console.log("This is not a DNA Strand");
        break;
}
}
  return finalWord;
}
console.log(dnaStrand("ACGA"))
console.log(dnaStrand("be"))