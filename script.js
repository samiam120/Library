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

function displayBooks(book) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardAuthor = document.createElement("p");
  const cardTitle = document.createElement("p");
  const cardPages = document.createElement("p");
  const cardHaveRead = document.createElement("p");
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove Book";


  cardAuthor.textContent = book.author;
  cardTitle.textContent = book.title;
  cardPages.textContent = book.numPages;
  cardHaveRead.textContent = book.cardHaveRead;

  removeBtn.addEventListener("click", () => {
    card.remove();
  });

  card.appendChild(cardAuthor);
  card.appendChild(cardTitle);
  card.appendChild(cardPages);
  card.appendChild(cardHaveRead);

  showcase.appendChild(card);
  card.appendChild(removeBtn);
}

//method to add books
function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBtn.addEventListener("click", () => {
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
  console.log(myLibrary);
});
