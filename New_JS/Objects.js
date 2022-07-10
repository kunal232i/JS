// // Objects{}

// const person = {
//   name: "Kunal",
//   shirt: "White",
// };

// //diff ways of accessing objects

// //dot notation
// console.log(person.name, person.shirt);

// //bracket notation
// console.log(person["name"]);

// //assign object
// person.phone = "1-222-378827";
// person["phone"] = "1 - 222 - 378827";
// console.log(person.phone);

// console.log(person);

// const introducer = (name, shirt) => {
//   const person = {
//     name: name,
//     shirt: shirt,
//   };
//   const intro = `hii, my is ${person.name}.my shirt colour is ${person.shirt}.`;

//   return intro;
// };

// console.log(introducer("kunal", "black"));
// console.log(introducer("Leonardo", "white"));

const intro = (name, age) => {
  const person = {
    name: name,
    age: age,
    assets: 40000,
    debt: 3000,
    netWorth: function () {
      return this.assets - this.debt;
      //this <- it means that it is getting value from person.
    },
  };

  //   const net Worth = person.assets - person.debt;

  const intro1 = `Hey, myself ${person.name} and my age is ${person.age}.
  my networth is ${person.netWorth()} rupees`;
  return intro1;
};

console.log(intro("kunal", 21));
