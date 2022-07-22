//loop

//for loop-> when you know how many times you want to loop
//while loop -> when you are NOT sure how many times you want to loop

// let num = 0;
// let num2 = 10;

// while (num < num2) {
//   console.log(`loop: ${num}`);
//   num++;
// }

//addEventListener

//DOM -> Document Object Model

// let playDiv = document.getElementById("play");

// playDiv.onclick = () => {
//   console.log("Hello");
// };

//better method

// playDiv.addEventListener("click", function () {
//   console.log("hey");
// });

document.addEventListener("keydown", function (e) {
  if (e.key == "q") {
    console.log("you pressed Q");
    document.getElementById("punch").play();
  } else {
    console.log("Not Q");
  }
});

//<audio> Tags
