/*
The input data for this exercise will be two dimensional array (an array of arrays), 
where each sub-array will have two numeric values. For example:

[[1, 2], [2, 3]]
The first will be the value to repeat, the second will be the amount of times to repeat that value.

Instruction
Create a function named repeatNumbers that will return a string 
with each of the given values repeated the appropriate number of times, 
if there are multiple sets of values each set should be separated by a comma. 
If there is only one set of values then you should omit the comma.
*/

const repeatNumbers = function (data) {
  let repeatString = {};
  let repeatNum = 0;
  
  const repeatStrings = data.map((item) => {
      repeatString = String(item[0]);
      repeatNum = item[1];
      let repeatedString = repeatString.repeat(repeatNum)
      return repeatedString;
  })
  return repeatStrings;
};

console.log(repeatNumbers([[1, 10]])); // 1111111111
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
); // 11, 222
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
); // 10101010, 343434343434, 9292

module.exports = repeatNumbers;



// Get two numbers of the data 
  // First is the number that you want to repeat repeatString = str or index[0]
  // Second is the amount of times that you want to repeat repeatNum = index[1]
  // by using .map()? repeatStrings = repeatString * repeatNum -> repeatStrings.join(", ")

      // if (item.length > 1){
      //   let result = repeatStrings.join(" ");
      //   return result;
      // }
      
  // } else {
  //   return repeatStrings;
  // }