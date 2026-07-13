function solution(str, ending){
  let start = str.length - ending.length;

    for (let i = 0; i < ending.length; i++) {
        if (str[start + i] !== ending[i]) {
            return false;
        }
    }

    return true;
}