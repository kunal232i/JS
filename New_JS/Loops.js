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

const numbers = [1, 2, 3, 4, 5, 6];

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

const letterCounter = () => {
  const phrase = "hey, can you bring me food, please!!";

  //for of -> it is for letters
  //for in -> it is for index
  for (const letter in phrase) {
    console.log(letter);
  }
};
letterCounter();
