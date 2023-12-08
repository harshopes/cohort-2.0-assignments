/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str = str.toLowerCase(); // you have to update the string str.toLowerCase(); forms a new string doesn't auto update the og string
  let count = 0;
  for(let i=0; i<str.length; i++){
    if(str.charAt(i)=='u' || str.charAt(i)=='o' || str.charAt(i)=='i' || str.charAt(i)=='e' || str.charAt(i)=='a') {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;