function calcType(a, b, res) {
switch(true){
case a + b === res:
    return 'addition';
    break;
case a * b === res:
    return 'multiplication';
    break;
case a - b === res:
    return 'subtraction';
    break;
case a / b === res:
    return 'division';
    break;
default:
    return 'This is not an operation'
    
}
}
console.log(calcType(5,2,10));