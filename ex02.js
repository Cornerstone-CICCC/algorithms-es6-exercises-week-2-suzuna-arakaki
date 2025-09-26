/*
We'll be adding only the numbers in the array which match the given condition.

Instruction
Create a function named conditionalSum that will be given an array of numbers and a condition, 
in this case odd or even. Given this condition, add up only the values which match that condition. 
If no values match the condition, return 0.

filter and reduce
*/

const conditionalSum = function (values, condition) {
  if (values.length === 0) {
    return 0;
  }
  //new array with reduce method
  const newArrayUsingFilter = values.filter((item) => {
      if (condition === "even") {
        return item % 2 === 0;
      } else if (condition === "odd")  {
        return item % 2 !== 0;
      } else {
      }
    });
    const sum = newArrayUsingFilter.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    return sum;
  };

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); // 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // 144
console.log(conditionalSum([], "odd")); // 0

module.exports = conditionalSum;


//reduce method はfilter methodの中に使えるの？
  /*reduce と filter は 組み合わせ可能。どちらを外に書くかは「メインの目的」による
  「まず絞り込みたい」 → 外側を filter
  「最終的に1つの値にしたい」 → 外側を reduce*/

  // const newArrayUsingReduce = values.reduce((acc, cur) => {
  //   //do filter of the new array with filter method inside reduce
    
  //   if (newArrayUsingFilter.length === 0) {
  //     return 0;
  //   } 
  //   // return acc + cur;
  // }, 0);