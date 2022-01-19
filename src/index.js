function helpReadable(number) {
  let num = parseInt(number);
  let out = "";
  switch (parseInt(num / 100)%10) {
    case 0 : break; 
    case 1 : out += "one hundred ";
    break;
    case 2 : out += "two hundred "; 
    break;
    case 3 : out += "three hundred ";
    break;
    case 4 : out += "four hundred ";
    break;
    case 5 : out += "five hundred ";  
    break;
    case 6 : out += "six hundred ";
    break;
    case 7 : out += "seven hundred ";
    break;
    case 8 : out += "eight hundred ";
    break;
    case 9 : out += "nine hundred ";
    break;
  }
    let tens = parseInt(num / 10)%10;
    let ones = num%10;
    switch (tens) {
    case 0 : break; 
    case 1 : switch (ones) {
    case 0 : out += "ten";
    break; 
    case 1 : out += "eleven";
    break;
    case 2 : out += "twelve"; 
    break;
    case 3 : out += "thirteen";
    break;
    case 4 : out += "fourteen";
    break;
    case 5 : out += "fifteen";  
    break;
    case 6 : out += "sixteen";
    break;
    case 7 : out += "seventeen";
    break;
    case 8 : out += "eighteen";
    break;
    case 9 : out += "nineteen";
    break;
    }
    break;
    case 2 : out += "twenty "; 
    break;
    case 3 : out += "thirty ";
    break;
    case 4 : out += "forty ";
    break;
    case 5 : out += "fifty ";  
    break;
    case 6 : out += "sixty ";
    break;
    case 7 : out += "seventy ";
    break;
    case 8 : out += "eighty ";
    break;
    case 9 : out += "ninety ";
    break;
    }
    if(tens != 1) {
      switch (ones) {
    case 0 : break;
    case 1 : out += "one";
    break;
    case 2 : out += "two"; 
    break;
    case 3 : out += "three";
    break;
    case 4 : out += "four";
    break;
    case 5 : out += "five";  
    break;
    case 6 : out += "six";
    break;
    case 7 : out += "seven";
    break;
    case 8 : out += "eight";
    break;
    case 9 : out += "nine";
    break;
    }
    }
  
  return out;
}

function toReadable(number) {
  if(number == 0) {
    return "zero";
  }
  let str1 = number.toString(10);
  if(str1.length < 4) {
    return helpReadable(number);
   } else if(str1.length < 7) {
     let out = helpReadable(number / 1000) + " thousand " + helpReadable(number%1000);
     return out;
   } else {
     let out = helpReadable(number / 1000000) + " million " + helpReadable(number/1000) ; if(helpReadable(number / 1000) != "") {out += ' thousand ' ;}
     out += helpReadable(number%1000);
     return out;
   }
  }
