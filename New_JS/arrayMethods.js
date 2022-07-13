// //Map
// let result = [1, 2, 3, 4, 5].map((number) => number * 2);
// console.log(result);

// const doubleMap = (numbers) => {
//   return numbers.map((number) => number * 2);
// };

// console.log(doubleMap([1, 2, 3, 6, 9]));

//Filters

// //manual
// const filter = (numbers, greaterThan) => {
//   let result = [];
//   for (const num of numbers) {
//     if (num > greaterThan) {
//       result.push(num);
//     }
//   }
//   return result;
// };

// console.log(filter([1, 2, 3, 4, 5, 6, 7], 3));

//automatic ->array method

// const nums = [1, 2, 4, 6, 7, 8];
// console.log(nums.filter((num) => num > 3));

// const actors = [
//   { name: "johnny", netWorth: 2000000 },
//   { name: "amber", netWorth: 10 },
//   { name: "matt", netWorth: 170000000 },
//   { name: "brad", netWorth: 300000000 },
//   { name: "leonardo", netWorth: 10000000 },
// ];

// let result = actors.filter((actor) => actor.netWorth > 10);
// console.log(result);
// let names = result.map((actor) => actor.name).join(", ");
// console.log(names);

// arrayMethods.innerHTML = `<h1>Kunal<h1>`;
// arrayMethods.innerHTML = `<h1>${JSON.stringify(result)}<h1>`;
// arrayMethods.innerHTML = `<h1>${names}</h1>`
// arrayMethods.write("<h1>Hello World</h1>");
// arrayMethods.innerHTML = `<h1>${names}</h1>`;

//reduce
// let nums = [1, 2, 3, 4, 5];

// const result = nums.reduce((a, b) => a + b);
// console.log(result);

// let nums = [1, 2, 3, 4];
// function mul(a, b) {
//   return a * b;
// }

// const result = nums.reduce(mul);
// console.log(result);

// const actors = [
//   { name: "johnny", netWorth: 2000000 },
//   { name: "amber", netWorth: 10 },
//   { name: "matt", netWorth: 170000000 },
//   { name: "brad", netWorth: 300000000 },
//   { name: "leonardo", netWorth: 10000000 },
// ];
// let result = actors.reduce((a, b) => a + b.netWorth, 0);

// console.log(result);
