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

const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
  };
  const intro = `hii, my is ${person.name}.my shirt colour is ${person.shirt}.`;

  return intro;
};

console.log(introducer("kunal", "black"));
