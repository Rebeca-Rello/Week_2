
import { Book } from "./book"

export class Library{

    private books: Book []
    private address: string
    private manager: string

    constructor(address:string, manager:string){

        this.books =  [new Book ("Los pilares de la Tierra",1068, "9781509848492","Ken Follet", "PANMACMILLAN"),
         new Book ("Donde los árboles cantan", 2010, "IBN2344433-BC23333","Laura Gallego", "ALFAGUARA") ,
         new Book ("La catedral del Mar", 2015, "IBN2342213-BC23222"," Ildefonso Falcones", "PLANETA"),
        ]

        this.address = address;
        this.manager = manager;
         

    }

    public getaddress():string{

        return this.address

     }


    public setaddress(newaddress:string):void{

     this.address = newaddress;
     }
     
     public getmanager():string{

        return this.manager

     }


    public setmanager(newmanager:string):void{

     this.manager = newmanager;
     }
     
    public getNumberOfBooks():number{

        return this.books.length
     }

     public findByAuthor (findauthor:string):Book[]{


        let listofbooks:Book[] = []
            for(let i = 0; i<this.books.length; i++){

                if(findauthor == this.books[i].getauthor()){

                    listofbooks.push(this.books[i])
                }
            }

            return listofbooks

        }

     public setbooks(listadelibros:Book[]):void{

        this.books = listadelibros
     }

       
     }

