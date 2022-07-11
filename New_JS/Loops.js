// const fruits = ["🍎", "🍌", "🍉", "🍊", "🍐"];

// //for ascending
// for (let i = 0; i <= fruits.length - 1; i++) {
//   console.log(i, fruits[i]);
// }

// //for decending
// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(i, fruits[i]);
// }

// //loops new technique to write
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// const numbers = [1, 2, 3, 4, 5, 6];

// let result = [];
// let num;
// for (const num of numbers) {
//   console.log(num);
//   result.push(num * 2);
// }
// console.log(result);

// //in function
// const Double = (num) => {
//   let result = [];
//   for (const no of num) {
//     result.push(no ** 2);
//   }
//   return result;
// };

// console.log(Double([2, 3, 4, 5, 6, 20, 40, 50, 22, 99, 89]));

//letter counter

// const letterCounter = (phrase) => {
//for of -> it is for letter  //for in -> it is for index
// let result = 0;

// for (const index in phrase) {
//   console.log(Number(index) + 1);
//   result = Number(index) + 1;
//   //typecasting -> changing one data type to another i.e here
//   // sting changes to integer
// }
//   return { result: phrase.length };
// };
// const phrase = prompt("Write any phrase and get the count.");
// console.log(letterCounter(phrase));

// const sumArray = (numbers) => {
//   let result = 0;
//   for (const num of numbers) {
//     console.log(num);
//     result += Number(num);
//   }
//   return { result: result };
// };

// array = [1, 2, 3, 4, 5, 20];
// console.log(sumArray(array));

// const findMax = (numbers) => {
//   let result = numbers[0];

//   for (const num of numbers) {
//     if (num > result) {
//       result = num;
//     } else {
//       console.log("Enter the number");
//     }
//   }
//   return { result };
// };

// array = [1, 2, 4, 5, 9, 2];
// console.log(findMax(array));

// //letter frequency
// const letterFrequency = (phrase) => {
//   let freq = {};
//   for (const letter of phrase) {
//     if (letter in freq) {
//       freq[letter] += 1;
//     } else {
//       freq[letter] = 1;
//     }
//   }
//   return freq;
// };

// // let phrase = prompt("write somthing idoit");
// // console.log(letterFrequency(phrase));

// //Frequency if words
// const wordFreq = (phrase) => {
//   const words = phrase.split(" ");
//   return letterFrequency(words);
// };

// const userInput = prompt("Enter the sentence");
// console.log(wordFreq(userInput));

function howManySeconds(hours) {
  let minutes = hours * 60;
  let seconds = minutes * 60;

  return seconds;
}
console.log(howManySeconds(1));
