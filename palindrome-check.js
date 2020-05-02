function palindrome(str) {
  let reverse = str.split("").filter(x => (/[\W\s_]/i).test(x)==false).map(x=> x.toLowerCase()).reverse().join("");
  let newStr =str.split("").filter(x => (/[\W\s_]/i).test(x)==false).map(x=> x.toLowerCase()).join("");

  console.log(reverse);
  console.log(newStr);
  return reverse == newStr;
}



console.log(palindrome("1 eye for of 1 eye."));
