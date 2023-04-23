// Create a JavaScript code that accepts an array of numbers and returns a new array with only the odd numbers from the original array. If there is only one odd number in the array, return an array with that single value.

function filterOddNumbers(arr) {
    const oddNumbers = arr.filter(num => num % 2 !== 0);
    return oddNumbers.length > 1 ? oddNumbers : oddNumbers[0];
  }

const numbers = [2, 4, 6, 8, 11, 20, 15, 22];
const oddNumbers = filterOddNumbers(numbers);
console.log(oddNumbers); 

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers2 = filterOddNumbers(numbers2);
console.log(oddNumbers2); 

const numbers3 = [70, 42, 55, 81, 21, 91, 34];
const oddNumbers3 = filterOddNumbers(numbers3);
console.log(oddNumbers3); 

const numbers4 = [2,4,6,8,10,11,12];
const oddNumbers4 = filterOddNumners(numbers4);
console.log(oddNumbers4); 
