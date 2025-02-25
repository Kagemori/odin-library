const myLibrary = [];

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

function addBookToLibrary(title, author, pages, haveRead) {
    let book = new Book(title, author, pages, haveRead);

    myLibrary.push(myLibrary);
}

// For the form
const openForm = document.getElementById("new-book");
const form = document.getElementById("book-form");

openForm.addEventListener('click', () => {
    form.style.display = 'block';
})