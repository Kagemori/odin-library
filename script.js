const myLibrary = [];
let librarySize = 0;

function Book(title, author, pages, haveRead, libID) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.libID = libID;
}

function addBookToLibrary(title, author, pages, haveRead) {
    let book = new Book(title, author, pages, haveRead, librarySize);

    myLibrary.push(book);
    librarySize += 1;

    const iterator = myLibrary.values();

    for (let value of iterator) {
        console.log(value);
    }
}

// For the form
const openForm = document.getElementById("new-book");
const formSection = document.getElementById("book-form");
const form = document.getElementById("form");

openForm.addEventListener('click', () => {
    formSection.style.display = 'block';
})

function handleFormSubmit(event) {
    event.preventDefault();

    const bookTitle = document.getElementById("book-title").value;
    const bookAuthor = document.getElementById("book-author").value;
    const bookPages = document.getElementById("book-pages").value;
    const bookRead = document.getElementById("book-read").checked;

    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
}

form.addEventListener("submit", handleFormSubmit);