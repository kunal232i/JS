//Asynchronous programming

// const waitingForSoup = () => console.log("soup is ready");

// console.log("start convo");
// setTimeout(waitingForSoup, 2000); //1000ms -> 1s
// console.log("still speaking");

//promises
const Promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReeady = [true, false][Math.floor(Math.random() * 2)]; //randomly chooosing true or false
    isReeady // condition
      ? resolve("soup is ready") // runs if true
      : reject("No soup today"); // runs if falses
    // ternary operators
  }, 1000);
});

// console.log(
//   Promise1.then((success) => console.log({ success })) //printing the resolve value
//     .catch((error) => console.log({ error })) //catching the rejected value
// );

const getSoup = async () => {
  const data = {
    rating: null,
    tip: null,
    pay: null,
    review: null,
  };

  try {
    const soup = await Promise1;
    console.log(soup);
    data.rating = 5;
    data.tip = 0.2;
    data.pay = 10;
    data.review = 5;
    return data;
  } catch (error) {
    console.log(error);
    data.rating = 1;
    data.tip = 0;
    data.pay = 0;
    data.review = 1;
    return data;
  }
};

getSoup().then((value) => console.log(value));

//whenever you see async function if you need output of that function
//then you have to await or use -> .then for output.
// const sum = async (a, b) => a + b;
// sum(1, 2).then((value) => console.log(value));

// const url = "https://dog.ceo/api/breeds/image/random";
// fetch(url) // promise
//   .then((response) => response.json()) //promise
//   .then((data) => console.log(data));

//new syntax ES6 for fetching API
//Async await

// const getDog = async () => {
//   const url = "https://dog.ceo/api/breeds/image/random";
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// };

// getDog();
