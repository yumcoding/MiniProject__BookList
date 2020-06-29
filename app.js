class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.querySelector("#book__list");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;
    list.appendChild(row);
  }
}

document.querySelector("#form").addEventListener("submit", function (e) {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  //instantiate Book and UI
  const book = new Book(title, author, isbn);

  const ui = new UI();

  //validation
  if (title == "" || author === "" || isbn === "") {
    //show alert
  } else {
    //add book to list
    ui.addBookToList(book);
  }

  e.preventDefault();
});
