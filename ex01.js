/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers 
and return the sum of the two largest numbers in that array.
*/

const sumLargestNumbers = function (data) {
  let number1 = 0;
  let number2 = 0;
  data.forEach((item) => {
    if(item > number1 && item > number2){
      if(number1 > number2){
        number2 = item;
      } else {
        number1 = item;
      }
    } else if (item > number1){
      number1 = item;
    } else if (item > number2){
      number2 = item;
    } else {
      // nothing to do
    }
  })
  return number1 + number2;
};

console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126

module.exports = sumLargestNumbers;


// let number1 = 0;
//   let number2 = 0;
//   data.forEach((item) => {
//     if (item > number1){
//       if (item > number2){}
//     return number1 + number2;
//   })


    // if (item > number1){
    //   if (number1 < number2){
    //       number1 = number2;
    //   } else if (item > number2){
    //     number2 = item;
    //  }
    // } 
    // return number1 + number2;