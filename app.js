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

  removeBook(target) {
    if (target.classList.contains("delete")) {
      target.parentElement.parentElement.remove();
    }
  }
  showAlert(msg, err) {
    const div = document.createElement("div");
    div.className = `alert ${err}`;
    div.appendChild(document.createTextNode(msg));

    const container = document.querySelector(".container");
    const form = document.querySelector("#form");

    container.insertBefore(div, form);

    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach(function (book) {
      const ui = new UI();
      ui.addBookToList(book);
    });
  }
}

document.addEventListener("DOMContentLoaded", Store.displayBooks);

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
    ui.showAlert("Please fill in all fields", "error");
  } else {
    //add book to list
    ui.addBookToList(book);

    //clear fields
    ui.clearFields();
    //show alert
    ui.showAlert("Book added!", "success");
  }

  e.preventDefault();
});

document.querySelector("#book__list").addEventListener("click", function (e) {
  const ui = new UI();

  ui.removeBook(e.target);

  ui.showAlert("Book Removed!", "success");

  e.preventDefault();
});
