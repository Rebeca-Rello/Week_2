

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

        for(let datos in Persona){
            return datos in Persona[datos];
        }
    }

    printHobbies(){

      return this.hobbies;

    }


}

////He intentado comprobar los resultado con module.exports, pero al incluir los diferentes
////metodos, no los seleccionaba, os tengo que consultar por qué.