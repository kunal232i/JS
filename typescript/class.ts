// class Person {
//   name: string;
//   education: string;
//   private dateOfBirth: Date;
//   constructor(name: string, education: string, dateOfBirth: Date) {
//     this.name = name;
//     this.education = education;
//     this.dateOfBirth = dateOfBirth;
//   }

//   getAge() {
//     let currentYr = new Date(Date.now()).getFullYear();
//     let yrOfBirth = this.dateOfBirth.getFullYear();
//     return currentYr - yrOfBirth;
//   }

//   updateDate(date: Date) {
//     this.dateOfBirth = date;
//   }
// }

// let kunal = new Person("kunal", "Diploma", new Date("2004-03-23"));
// let shashank = new Person("shashank", "12th", new Date("2002-04-03"));
// console.log(kunal);
// kunal.name = "Kunal pro";
// kunal.updateDate(new Date("1990-03-21"));
// console.log(kunal);
