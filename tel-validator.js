function telephoneCheck(str) {
let regex = /^1?\s?\d{3}-\d{3}-\d{4}/;
let regex2= /^1?\s?[(]\d{3}[)]\s?\d{3}-\d{4}/;
let regex3 = /^\d{3}\s\d{3}\s\d{4}/;
let regex4 = /^\d{10}$/;
let regex5 = /^[1]\s\d{3}\s\d{3}\s\d{4}/;
let arr = new Array(regex,regex2,regex3,regex4,regex5);
return arr.some(reg => reg.test(str)== true);
}

console.log(telephoneCheck("1 555-555-5555"));
