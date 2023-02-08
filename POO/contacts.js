const {Persona} = require("./person")

class Contact{

    constructor(){

        this.contacts=[]
    }

    printPersons(){
        for (let persona of this.contacts) {
            persona.printAll()
        }
        
    }
}

module.exports = {Contact}
