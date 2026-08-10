function add(arr) {
  let result = [];
  let sum = 0;
  for (let num of arr) {
    sum += num
  result.push(sum)
  }

  return result;
}
console.log(add([1,2,3,4]))