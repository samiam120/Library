const myLibrary = [];

const author = document.getElementById("author");
const title = document.getElementById("title");
const numPages = document.getElementById("numPages");
const haveRead = document.getElementById("have-read");
const addBtn = document.querySelector(".add");

const showcase = document.querySelector(".showcase");

// book constructor
function Book(author, title, numPages, haveRead) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.haveRead = haveRead;
}

Book.prototype.toggleReadStatus = function () {
  this.haveRead = !this.haveRead;
};

function displayBooks(book) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardAuthor = document.createElement("p");
  const cardTitle = document.createElement("p");
  const cardPages = document.createElement("p");
  const cardHaveRead = document.createElement("p");
  const removeBtn = document.createElement("button");
  const toggleReadBtn = document.createElement("button");

  cardAuthor.textContent = `Author: ${book.author}`;
  cardTitle.textContent = `Title: ${book.title}`;
  cardPages.textContent = `Pages: ${book.numPages}`;
  cardHaveRead.textContent = book.haveRead ? "Read" : "Not Read";

  toggleReadBtn.textContent = "Read Status";
  removeBtn.textContent = "Remove Book";

  toggleReadBtn.addEventListener("click", () => {
    book.toggleReadStatus();
    cardHaveRead.textContent = book.haveRead ? "Read" : "Not Read";
  });

  removeBtn.addEventListener("click", () => {
    card.remove();
    const index = myLibrary.indexOf(book);
    myLibrary.splice(index, 1);
  });

  card.appendChild(cardAuthor);
  card.appendChild(cardTitle);
  card.appendChild(cardPages);
  card.appendChild(cardHaveRead);

  showcase.appendChild(card);
  card.appendChild(removeBtn);
  card.appendChild(toggleReadBtn);
}

//method to add books
function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBtn.addEventListener("click", () => {
  if (author.value === "" || (title.value === "") | (numPages.value === "")) {
    alert("fill out required fields");
  } else {
    const newBook = new Book(
      author.value,
      title.value,
      numPages.value,
      haveRead.checked
    );
    addBookToLibrary(newBook);
    displayBooks(myLibrary[myLibrary.length - 1]);
    author.value = "";
    title.value = "";
    numPages.value = "";
    haveRead.checked = false;
  }
});
