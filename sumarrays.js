function sum (numbers) {
let sum = numbers.reduce((a, b) => a + b,0)
  return sum
}
console.log(sum([4,5,6]));