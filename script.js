let myLibrary = [];
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
}

// For the form
const openForm = document.getElementById("new-book");
const formSection = document.getElementById("book-form");
const form = document.getElementById("form");
const formButton = document.getElementById("new-book");

openForm.addEventListener('click', () => {
    if(formSection.style.display == "flex"){
        formSection.style.display = 'none';
        openForm.textContent = "New Book";
    }else{
        formSection.style.display = 'flex';
        openForm.textContent = "Cancel";
    }
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

    let bookRemove = document.createElement("button");
    let bookToggleRead = document.createElement("button");

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
    bookRemove.classList.add(`libID-${latestBookID}`);
    bookToggleRead.classList.add(`libID-${latestBookID}`);

    bookRemove.setAttribute('id','book-remove');
    bookToggleRead.setAttribute('id','toggle-read');

    bookCardTitle.textContent = `${latestBookTitle}`;
    bookCardAuthor.textContent = `Author: ${latestBookAuthor}`;
    bookCardPages.textContent = `${latestBookPages} Pages`;
    if(latestBookRead == true){
        bookCardRead.textContent = `You have read this book.`;
    }else{
        bookCardRead.textContent = `You have not read this book.`;
    }

    bookRemove.textContent = `Remove Book`;
    bookToggleRead.textContent = `Toggle Read`;

    bookCard.appendChild(bookInfo);
    bookCard.appendChild(bookOptions);

    bookInfo.appendChild(bookCardTitle);
    bookInfo.appendChild(bookCardAuthor);
    bookInfo.appendChild(bookCardPages);
    bookInfo.appendChild(bookCardRead);

    bookOptions.appendChild(bookToggleRead);
    bookOptions.appendChild(bookRemove);

    let booklist = document.getElementById("booklist");

    booklist.appendChild(bookCard);

    formSection.style.display = 'none';
    openForm.textContent = "New Book";

    bookRemove.addEventListener("click", function(event) {
        let idCheck = event.target.classList.value;
        let idValue = idCheck.slice(6);

        let searchBooks = document.querySelector(`.book-card.${idCheck}`);

        myLibrary = myLibrary.filter(item => item.libID !== Number(idValue));
        searchBooks.remove();
    })

    bookToggleRead.addEventListener("click", function(event) {
        let idCheck = event.target.classList.value;
        let idValue = idCheck.slice(6);

        let searchBooks = document.querySelector(`.book-card.${idCheck}`);
        let bookToRead = searchBooks.querySelector(`.book-info .card-read`);

        if(bookToRead.textContent == "You have not read this book."){
            bookToRead.textContent = "You have read this book.";
            let bookToChange = myLibrary.find(item => item.libID === Number(idValue));
            bookToChange.haveRead = true;
        }else{
            bookToRead.textContent = "You have not read this book.";
            let bookToChange = myLibrary.find(item => item.libID === Number(idValue));
            bookToChange.haveRead = false;
        }
    })
}

form.addEventListener("submit", handleFormSubmit);