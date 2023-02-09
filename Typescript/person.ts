

 export class Person{

    public name:string
    public age:number
    private address:string


    constructor(name:string,age:number,address:string,){

        this.name = name;
        this.age = age;
        this.address = address;
    }

    public getAddress():string{

        return this.address

     }


    public setAddress(newaddress:string):void{

     this.address = newaddress;
     }
 
 
    public printName():string{

        return this.name
    }

    public yearOfBirth(year):number{

        return year - this.age
    }


}






