function wordsToMarks(string){
let letters = string.split("");
let alphabet = "abcdefghijklmnopqrstuvwxyz"
let numbers = letters.map(letter => alphabet.indexOf(letter) + 1);
let sum = numbers.reduce((num,accum) => num + accum,0)

return sum
}
console.log(wordsToMarks("love"))
console.log(wordsToMarks('joice'))
console.log(wordsToMarks("friendship"))
