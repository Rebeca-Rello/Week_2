const {Contact} = require("./contacts")

const {Persona} = require("./person")

let mario= new Persona(70,1.80, "verdes", "rubio", 1980, "nadar bailar leer");

let rebeca= new Persona(50,1.70, "verdes", "pelirroja", 1985, "bailar  leer historia");


let listaContactos= new Contact()

listaContactos.contacts.push(mario)
listaContactos.contacts.push(rebeca)

listaContactos.printPersons()