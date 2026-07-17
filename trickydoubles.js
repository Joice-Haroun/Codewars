function trickyDoubles(n){
 let str = n.toString();
if (str.length % 2 === 0){
const middle = str.length / 2;
const firstHalf = str.slice(0, middle);
const secondHalf = str.slice(middle);
  if(firstHalf === secondHalf){
    return n
  }
  else{
    return n * 2
  }
}
else{
  return n * 2
}
  return n
}
console.log(trickyDoubles("1234"))