function persistence(num) {
let n =  num.toString().split("")
let result = n.reduce((sum,currentValue)=> sum * Number(currentValue));
while(result > 9){
    n = result.toString().split("");
    result = n.reduce((sum,currentValue)=> sum * Number(currentValue));
}
return result;
}
console.log(persistence(4))