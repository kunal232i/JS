//Asynchronous programming

// const waitingForSoup = () => console.log("soup is ready");

// console.log("start convo");
// setTimeout(waitingForSoup, 2000); //1000ms -> 1s
// console.log("still speaking");

//promises
// const Promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     isReeady = [true, false][Math.floor(Math.random() * 2)]; //randomly chooosing true or false
//     isReeady // condition
//       ? resolve("soup is ready") // runs if true
//       : reject("No soup today"); // runs if falses
//     // ternary operators
//   }, 2000);
// });

// console.log(
//   Promise1.then((success) => console.log({ success })) //printing the resolve value
//     .catch((error) => console.log({ error })) //catching the rejected value
// );

console.log(
  "fetch:",
  fetch("https://dog.ceo/api/breeds/image/random") // promise
    .then((response) => console.log("response: ", response.json())) //promise
    .then((data) => console.log(data))
);

//new syntax ES6 for fetching API
//Async await

const