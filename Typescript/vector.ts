

export class Vector{

    private elements:number[]

constructor(n:number, k:number){

    this.elements =[]

    for(let i=0; i<n; i++){

        this.elements.push(Math.floor(Math.random()*(k+1)))       
    }

}

   public setelement(newelements:number[]):void{

    this.elements = newelements;
    }
    
   public getelements():number[]{

       return this.elements

        
}

//Duda, si voy a hacer el metodo print, que debe imprimir el vector,
// para que necesito hacer público el atributo? Porque sino no me dejaría imprimirlo?
//Porque lo puedo imprimir haciendo console.log de getelements, no? En realidad, no me 
//haría falta el getelements, no? O si, porque si no, no puedo acceder al array que se cree?

 public print():number[]{

        return this.elements    
 }


public add(v1:Vector):Vector{
    
    let suma:Vector= new Vector(0,0);
    

    if(v1.elements.length == this.elements.length){

        for(let i=0; i<this.elements.length; i++){

            suma.elements.push(this.elements[i] + v1.elements[i])
        }
    }
    return suma

}


public subs(v1:Vector):Vector{
    
    let subs:Vector= new Vector(0,0);
    

    if(v1.elements.length == this.elements.length){

        for(let i=0; i<this.elements.length; i++){

            subs.elements.push(this.elements[i] - v1.elements[i])
        }
    }
    return subs

}


public mult(v1:Vector):Vector{
    
    let mult:Vector= new Vector(0,0);
    

    if(v1.elements.length == this.elements.length){

        for(let i=0; i<this.elements.length; i++){

            mult.elements.push(this.elements[i] * v1.elements[i])
        }
    }
    return mult

}


public multNumber(n:number):Vector{
    
    let multn:Vector = new Vector(0,0);
    
    
    for(let i=0; i<this.elements.length; i++){

            multn.elements.push(this.elements[i]* n)
        }
        return multn
    }
  

}
  


















