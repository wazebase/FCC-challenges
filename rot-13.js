function rot13(str) {
let x;
let newStr = "";
for(let i = 0; i< str.length;i++) {

if (/\w/.test(str.charAt(i)) != true){
  x = str.charAt(i);
}
else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
  x = String.fromCharCode(str.charCodeAt(i) + 13);
}

else if(str.charCodeAt(i)> 77 && str.charCodeAt(i)<= 90) {
  x = String.fromCharCode(str.charCodeAt(i)- 13);
}

newStr += x;
}
console.log(newStr);
  return newStr;
}

rot13("SERR PBQR PNZC");
