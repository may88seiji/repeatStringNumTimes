//1
function repeatStringNumTimes(str, num) {
  var arr = [];
   for(var i = 0; i< num; i++){
     arr.push(str);
   }
  return arr.join("");
}
//2
function repeatStringNumTimes(str, num) {
    return num > 0 ? str.repeat(num) : '';
}
//3
function repeatStringNumTimes(str, num) {
  var result = '';
  if(num < 0) {
    return result;
  }

  for(var i = 0; i < num; i++){
     result += str;
  }
  return result;
}
