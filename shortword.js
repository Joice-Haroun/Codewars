function findShort(s){
let words = s.split(" ");
let shortest = words[0].length;
for(let word of words){
  if(word.length < shortest){
    shortest = word.length
  }
}
  return shortest;
}