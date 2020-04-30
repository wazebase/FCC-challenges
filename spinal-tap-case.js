function spinalCase(str) {
  let regex= /[A-Z]/;
  let regex2 = /[\s_]/g;
  let regex3 = /[a-z][A-Z]/g;
  let x = str.match(regex3);
  if(x != null){
  x.forEach(el => str = str.replace(el,el[0]+ " "+ el[1]));
  }
  let arr = str.split("");
  
  let newStr= arr.map(x => regex.test(x)? x.toLowerCase(): x).join("");
  newStr = newStr.replace(regex2,"-");
  console.log(newStr);
  return newStr;
}

let result = spinalCase("The_Andy_Griffith_Show");
console.log(result);
