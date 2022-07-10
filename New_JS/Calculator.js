function sum(a, b) {
  return a + b;
}

function calculateTotal(food, tip) {
  tipPer = tip / 100;
  tipAmount = food * tipPer;
  Total = sum(food, tipAmount);
  return Total;
}

foodtotal = calculateTotal(300, 20);
console.log(foodtotal);

//ES6
//Arrow function

const sumArrow = (a, b) => {
  return a + b;
};

//Implicit retrun
//IMP to remove curly braces

const sumArrow2 = (a, b) => a + b;

console.log(sumArrow(90, 80));

const add = (a, b) => a + b;
console.log(add(10, 20));

const sub = (a, b) => a - b;
console.log(sub(30, 20));

const div = (a, b) => a / b;
console.log(div(30, 20));

const mul = (a, b) => a * b;
console.log(mul(30, 20));

console.log("hello from the SUM exercise");
