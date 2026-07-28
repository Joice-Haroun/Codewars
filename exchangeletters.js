// codewarLink https://www.codewars.com/kata/59e9f404fc3c49ab24000112/train/javascript
function nerdify(txt){
  let result = "";
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] === "a" || txt[i] === "A") {
      result += "4";
    } else if (txt[i] === "e" || txt[i] === "E") {
      result += "3";
    } else if (txt[i] === "l") {
      result += "1";
    } else {
      result += txt[i];
    }
  }

  return result;
}
console.log(nerdify('challenge'))