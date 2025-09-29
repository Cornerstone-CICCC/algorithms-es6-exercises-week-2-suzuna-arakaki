/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. 
Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = function (input) {
  // recieve the strings form the argument
  // separate the strings by using split(" "), put them in the new variable 
  // take an each first str of the word to be Upper-case
  // put them together by useing join("")
  // ("this is a string")); // thisIsAString
  const words = input.split(" ");
  const capitalized = words.map(word => {
    if (word.length > 0){
      let slicedWords = words.slice(1);
      // return word[0].toUpperCase()
      // + word.slice(1);
      console.log(slicedWords);
    } 
  })
  




  // if (words.length > 1) {
  //   let toBeUpperCaseStr = [...words].slice(1);
  //   let upperCasedStr = toBeUpperCaseStr.upperCase();
    
  // }
  // let firstStr = [...separated];
  // 
  
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy cornerstone")); //loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

module.exports = camelCase;
