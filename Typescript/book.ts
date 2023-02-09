

export class Book{

    private title: string
    private nPages: number
    private isbn: string
    private author: string
    private editorial: string

    constructor(title: string, nPages: number, isbn: string,author: string,editorial: string){

        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }

    public gettitle():string{

        return this.title

     }


    public settitle(newtitle:string):void{

     this.title = newtitle;
     }
     
     
    public getnPages():number{

        return this.nPages

     }


    public setnPages(newnPages:number):void{

     this.nPages = newnPages;
     }

     public getisbn():string{

        return this.isbn

     }


    public setisbn(newisbn:string):void{

         this.isbn = newisbn;

     }

     
     public getauthor():string{

        return this.author

     }


    public setauthor(newauthor:string):void{

     this.author = newauthor;

     }

     public geteditorial():string{

        return this.editorial

     }


    public seteditorial(neweditorial:string):void{

     this.author = this.editorial;

     }

     public toString():string{

       
       return "Title -" +" "+ this.title + "\n" + "Number of Pages -" +" "+ this.nPages + "\n" + "ISBN -"  +" "+ this.isbn + "\n" + 
       "Author -" +" "+ this.author + "\n" + "Editorial -" +" "+ this.editorial
     
    }









}