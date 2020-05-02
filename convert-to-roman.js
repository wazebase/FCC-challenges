function convertToRoman(num) {
let newArr =num.toString().split("").map(el => parseInt(el));
let l = newArr.length;
let roman = "";
let x;
let y;
let z;
let number;
for (let i = 0; i< newArr.length; i++, l--) {
    switch(l){
      case 1: 
        x = "I";
        y = "V";
        z = "X";
        break;
        case 2: 
        x = "X";
        y = "L";
        z = "C";
        break;
        case 3:
        x = "C";
        y = "D";
        z = "M";
        break;
        case 4:
        x = "M";
        y = "V"
        z = "X"
        break;
    };
  number = newArr[i];  
  switch(number){
      case 0: 
      break;
      case 1:
      roman += x;
      break;
      case 2:
      roman += x + x;
      break;
      case 3:
      roman += x+x+x;
      break;
      case 4: 
      roman += x+y;
      break;
      case 5: 
      roman += y;
      break;
      case 6:
      roman += y + x;
      break;
      case 7:
      roman += y + x + x;
      break;
      case 8:
      roman += y+ x + x + x;
      break;
      case 9:
      roman += x + z;
  
  }
}
  return roman;
}

console.log(convertToRoman(555));
