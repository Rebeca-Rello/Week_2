

import { Person } from "./person";



let rebe = new Person("Rebeca", 37, "Calle Hortaleza")



console.log(rebe);

console.log(rebe.printName());

rebe.name = "Maria";
console.log(rebe.name);

rebe.setAddress("Calle dos");
console.log(rebe.getAddress());

console.log(rebe.yearOfBirth(2023));

console.log(rebe.getAddress());