const Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{}



document.querySelector('.form').addEventListener('submit', function(e){
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //instantiate Book and UI
    const book = new Book(title, author, isbn);

    const ui = new UI();

    //validation
    if(title==''||aithor===''||isbn===''){
        //show alert
    }else{
        //add book to list
      
    }

    
    e.preventDefault();
})