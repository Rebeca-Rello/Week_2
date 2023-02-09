

import {Contacts} from "./contacts";

import {Person} from "./person";




let person1 = new Person ("Rebeca", 37, "Calle Hortaleza")

let person2 = new Person ( "Mario", 42, "Calle Limon")



let listaAgend = new Contacts()

listaAgend.people.push(person1)
listaAgend.people.push(person2)

listaAgend.printCalendar()










