let firstArray = ["one", "two", "three", "four", "five", "six", "sevent", "eigth", "nine", "ten"];
let secondArray = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

function helpReadable (number) {
  let num = parseInt(number);
  let out = "";
  let result1 = parseInt(num/100) % 10;
  
  if(result1 != 0)
    out += firstArray[result1 - 1];
  
  let tens = parseInt(num / 10) % 10;
  let ones = num % 10;
  
  if(tens != 0){
    if(ones == 1)
      out += secondArray[ones - 1];
    else
      out += secondArray[ones - 1];
  }
  
  if(tens != 1 && ones != 0)
    out += firstArray[ones - 1];
  
  return out;
}

module.exports = function toReadable (number) {
  if(number == 0) {
    return "zero";
  }
  
  let str1 = number.toString(10);
  
  if(str1.length < 4) {
    return helpReadable(number);
   } 
  else if(str1.length < 7) {
     let out = helpReadable(number / 1000) + " thousand " + helpReadable(number%1000);
     return out;
  } 
  else {
     let out = helpReadable(number / 1000000) + " million " + helpReadable(number/1000) ; if(helpReadable(number / 1000) != "") {out += ' thousand ' ;}
     out += helpReadable(number%1000);
     return out;
   }
}
