

import { Library } from "./library";

import { Book } from "./book";


let library1 = new Library ("Calle Fuencarral", "Manolo Benitez" );

console.log(library1);


let book1 = new Book ("Los pilares de la Tierra",1068, "9781509848492","Ken Follet", "PANMACMILLAN");

let book2 = new Book ("Donde los árboles cantan", 2010, "IBN2344433-BC23333","Laura Gallego", "ALFAGUARA") ;

let book3 = new Book ("La catedral del Mar", 2015, "IBN2342213-BC23222"," Ildefonso Falcones", "PLANETA");


library1.getaddress()
console.log(library1.getaddress);

library1.getmanager()
console.log(library1.getmanager);

library1.getNumberOfBooks()
console.log(library1.getNumberOfBooks);


console.log(library1.findByAuthor('Laura Gallego'));

library1.setbooks([])

