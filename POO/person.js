

class Persona{ 

    constructor(peso, estatura, colorOjos, colorPelo,yearOfBirth,hobbies)
    
    {   
        this.peso = peso
        this.altura = estatura
        this.colorOjos = colorOjos
        this.colorPelo = colorPelo
        this.yearOfBirth = yearOfBirth
        this.hobbies= [hobbies]
       
    }


    calcularIMC(){

        return this.peso/(this.altura*this.altura);
    }

    edad(year){

        return year - this.yearOfBirth;
    }

    printAll(){

        for(let atributos in this){
            console.log(atributos + " - " + this[atributos]);
        }
    }

    printHobbies(){

      return this.hobbies;

    }


}

module.exports={Persona}
