String.prototype.toJadenCase = function(){
  return this.split(" ").map((word)=> word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ")
};
let sen = "My name is Joice";
console.log(sen.toJadenCase());