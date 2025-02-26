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
const formButton = document.getElementById("new-book");

openForm.addEventListener('click', () => {
    formSection.style.display = 'flex';
    formButton.style.display = 'none';
})

function handleFormSubmit(event) {
    event.preventDefault();

    const bookTitle = document.getElementById("book-title").value;
    const bookAuthor = document.getElementById("book-author").value;
    const bookPages = document.getElementById("book-pages").value;
    const bookRead = document.getElementById("book-read").checked;

    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);

    let bookCard = document.createElement("div");
    let bookInfo = document.createElement("div");
    let bookCardTitle = document.createElement("div");
    let bookCardAuthor = document.createElement("div");
    let bookCardPages = document.createElement("div");
    let bookCardRead = document.createElement("div");
    let bookOptions = document.createElement("div");

    bookCard.classList.add("book-card");
    bookInfo.classList.add("book-info");
    bookOptions.classList.add("book-options");
    bookCardTitle.classList.add("card-title");
    bookCardAuthor.classList.add("card-author");
    bookCardPages.classList.add("card-pages");
    bookCardRead.classList.add("card-read");

    let latestBook = myLibrary[myLibrary.length-1];
    let latestBookTitle = latestBook.title;
    let latestBookAuthor = latestBook.author;
    let latestBookPages = latestBook.pages;
    let latestBookRead = latestBook.haveRead;
    let latestBookID = latestBook.libID;

    bookCard.classList.add(`libID-${latestBookID}`);

    bookCardTitle.textContent = `${latestBookTitle}`;
    bookCardAuthor.textContent = `Author: ${latestBookAuthor}`;
    bookCardPages.textContent = `${latestBookPages} Pages`;
    if(latestBookRead == true){
        bookCardRead.textContent = `You have read this book.`;
    }else{
        bookCardRead.textContent = `You have not read this book.`;
    }

    bookCard.appendChild(bookInfo);
    bookCard.appendChild(bookOptions);

    bookInfo.appendChild(bookCardTitle);
    bookInfo.appendChild(bookCardAuthor);
    bookInfo.appendChild(bookCardPages);
    bookInfo.appendChild(bookCardRead);

    let booklist = document.getElementById("booklist");

    booklist.appendChild(bookCard);

    formSection.style.display = 'none';
    formButton.style.display = 'inline';
}

form.addEventListener("submit", handleFormSubmit);