function sum (numbers) {
let sum = numbers.reduce((a, b) => a + b,0)
  return sum
}
console.log(sum([2,3,4]));
console.log(sum([]))