/* Create a JavaScript code that accepts an array of numbers and returns a new array with only the odd numbers from the original array. If there is only one odd number in the array, return an array with that single value.

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

Vowel versus Consonant
Create a JavaScript code that accepts a string of lowercase letters. Print the word followed by how many consonants and vowels it has.

"a", "e", "i", "o", and "u" are considered vowels. 

Every other letter is considered a consonant.

Hint: Define two variables that keep track of the number of consonants and vowels.
// create a variable that stores input
/*function countVowelsAndConsonants(str) {
    const vowels = "aeiou";
    let vowelCount = 0;
    let consonantCount = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  
    //console.log(`Word: ${str}`);
    //console.log(`Number of Vowels: ${vowelCount}`);
    //console.log(`Number of Consonants: ${consonantCount}`);
  }

countVowelsAndConsonants("hello"); 
countVowelsAndConsonants("ukelele"); 
countVowelsAndConsonants("awesome"); 
countVowelsAndConsonants("onomonopia");
countVowelsAndConsonants("textbook"); 

//With a for loop, create a JavaScript code that creates a new array in reverse order.
//we first define an originalArray containing five elements
//const originalArray = [1, 2, 3];
//We then create an empty reversedArray
//const reversedArray = [];
//We then use a for loop to iterate through each element in the originalArray
//Starting from the last element, we push each element into the reversedArray
for (let i = originalArray.length - 1; i >= 0; i--) {
  reversedArray.push(originalArray[i]);
}
//Finally, we log the reversedArray to the console, which gives us the reversed order of the originalArray
console.log(reversedArray); 
// Output: [3, 2, 1]

//const originalArray = [1, 3, 5, 7, 9, 11];
//const reversedArray = [];

for (let i = originalArray.length - 1; i >= 0; i--) {
  reversedArray.push(originalArray[i]);
}

//console.log(reversedArray); 
//output = [11, 9, 7, 5, 3, 1]

const originalArray = [20, 50, 30, 60, 200];
const reversedArray = [];

for (let i = originalArray.length - 1; i >= 0; i--) {
  reversedArray.push(originalArray[i]);
}

console.log(reversedArray);
//output = [200, 60, 30, 50, 20] 

const originalArray = [1, -1, 2, -3, 5, -8, 13];
const reversedArray = [];

for (let i = originalArray.length - 1; i >= 0; i--) {
  reversedArray.push(originalArray[i]);
}

console.log(reversedArray);
//output =  [13, -8, 5, -3, 2, -1, 1] */

//Create a JavaScript code that prints each number from 1 to 100 on a new line.

//For each multiple of 3, print "Fizz" instead of the number.

//For each multiple of 5, print "Buzz" instead of the number.

//For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

//use a for loop to iterate through numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  //use conditional statements (if, else if, and else) to check if the number is divisible by both 3 and 5, by 3 only, by 5 only, or by neither
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
//If the number is divisible by both 3 and 5, we print "FizzBuzz" to the console. If the number is only divisible by 3, we print "Fizz" to the console. If the number is only divisible by 5, we print "Buzz" to the console. Otherwise, we print the number itself to the console
