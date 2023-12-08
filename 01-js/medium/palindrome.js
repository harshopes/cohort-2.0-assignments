/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let regex = /[^\w]/g 
  str = str.toLowerCase().replace(regex,"");
  let reversed = str.split("").reverse().join("");
  let ans = (str===reversed);
  return ans;
}

module.exports = isPalindrome;
