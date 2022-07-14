// let titleDIV = document.getElementById("title");

// console.log("before: ", titleDIV.innerText);

// let msg = "Goodbyee !!";
// titleDIV.innerText = msg;
// console.log("after: ", titleDIV.innerText);

// titleDIV.innerHTML = `<p>${msg}</p>`;

// titleDIV.style.backgroundColor = "blue";

let redDiv = document.getElementById("red");
let yellowDiv = document.getElementById("yellow");
let greenDiv = document.getElementById("green");

// redDiv.onclick = () => console.log("red");
// yellowDiv.onclick = () => console.log("yellow");
// greenDiv.onclick = () => console.log("green");

const squares = document.querySelectorAll(".colorSquare");
// console.log(squares);
// console.log(squares[0].value);
// console.log(squares[1].value);
// console.log(squares[2].value);

//for Each
const timesClicked = { red: 0, yellow: 0, green: 0 };
squares.forEach((square) => {
  square.onclick = () => {
    console.log(square.value);
    timesClicked[square.value] += 1;
    square.innerText = timesClicked[square.value];
  };
});

const clearScore = () => {
  squares.forEach((square) => {
    square.innerText = "";
  });
};
let CleargameDiv = document.getElementById("Clear_game");
CleargameDiv.onclick = () => clearScore();
