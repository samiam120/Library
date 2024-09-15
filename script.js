const myLibrary = ["Harry Potter", "Percy Jackson"];

const author = document.getElementById("author");
const title = document.getElementById("title");
const numPages = document.getElementById("numPages");
const haveRead = document.getElementById("have-read");
const addBtn = document.querySelector(".add");

function Book(author, title, numPages, haveRead) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.haveRead = haveRead;
}

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
  author.value = "";
  title.value = "";
  numPages.value = "";
  haveRead.checked = false;
  console.log(myLibrary);
});
