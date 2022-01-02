import Person from "./Person";
import { kunal } from "./source";
console.log(kunal);

function getNameWithPro(po: Person): string {
  return po.name + "Pro";
}

let shashank = new Person("shas", "diploma", 19);
// let shashank = { name: "shas" };
console.log(getNameWithPro(shashank));
console.log(shashank);
