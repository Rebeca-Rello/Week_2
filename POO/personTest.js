


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




console.log('*******METER VALORES EN PARAMETRO******');

let mario= new Persona(70,1.80, "verdes", "rubio", 1980, "nadar bailar leer");
console.log(mario);

console.log('*******CALCULAR IMC******');

console.log(mario.calcularIMC());

console.log('*******CALCULAR EDAD******');

console.log(mario.edad(2023));

console.log('*******HOBBIES******');

console.log(mario.printHobbies());


