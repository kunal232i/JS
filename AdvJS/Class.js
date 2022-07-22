// class Car {
//   constructor(name, color, topSpeed) {
//     this.name = name;
//     this.color = color;
//     this.topSpeed = topSpeed;
//     this.currSpeed = 0;
//   }

//   getCurrentSpeed() {
//     return currSpeed;
//   }

//   ZeroToHudread() {
//     setTimeout(() => {
//       this.currSpeed = 100;
//       console.log(`phew, that was fast!! ${this.currSpeed} kmp`);
//     });
//   }
//   drive() {
//     this.currSpeed += 10;
//     console.log(`driving at ${this.currSpeed} kmp`);
//   }

//   brake() {
//     this.currSpeed -= 10;
//     console.log(`braking!!,current speed is ${this.currSpeed} kmp`);
//   }
//   stop() {
//     this.currSpeed = 0;
//     console.log(`coming to stop ${this.currSpeed} kmp`);
//   }
// }

// // const ferrari = new Car("Ferrari", "red", 450);
// // console.log(ferrari);
// // // ferrari.drive();
// // // ferrari.bratopSpeed;
// // // console.log(ferrari.currSpeed);
// // // ferrari.drive();
// // // console.log(ferrari.currSpeed);
// // // ferrari.ZeroToHudread();
// // // console.log(ferrari.currSpeed);

// // ferrari.drive();
// // ferrari.drive();
// // ferrari.drive();
// // ferrari.drive();
// // ferrari.drive();
// // console.log(ferrari.currSpeed);
// // ferrari.brake();
// // console.log(ferrari.currSpeed);

// // ferrari.stop();
// // drive();

// const porsche = new Car("porsche", "yellow", 350);

// console.log(porsche);
// // porsche.drive();
// // porsche.drive();
// // porsche.drive();
// // porsche.drive();
// const nums = [1, 2, 3, 4, 5];
// nums.forEach(() => porsche.drive());
// porsche.ZeroToHudread();

Array.prototype.myPush = function (item) {
  this[this.length] = item;
  return this;
};

const fruits = ["🍎", "🍏", "🍌", "🍐"];
console.log(fruits.myPush("🥝"));
fruits.myPush("🍇");
fruits.myPush("🍈");
fruits.myPush("🍉");
fruits.myPush("🍊");
console.log(fruits);
