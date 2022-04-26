/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const bookStore = document.querySelector('.book-store');
const bookSection = document.querySelector('.book-section');
const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

let storedBook = JSON.parse(localStorage.getItem('books')) || [];

const addBook = (book) => {
  const div = document.createElement('div');
  div.classList.add('book-container');

  div.innerHTML = `<span class='book-title'>${book.title}</span> by <span class='book-author'>${book.author}</span>
  <button class='delete'>Remove</button>`;

  bookStore.appendChild(div);
};

const clearFields = () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');

  title.value = '';
  author.value = '';
};

storedBook.forEach((book) => {
  addBook(book);
});

export const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  if (title === '' || author === '') {
    return;
  }
  const book = new Book(title, author);
  addBook(book);
  storedBook.push(book);
  localStorage.setItem('books', JSON.stringify(storedBook));
  clearFields();
});

const deleteBook = (target) => {
  if (target.classList.contains('delete')) {
    target.parentNode.remove();
  }
  const titeToBeRemoved = target.previousElementSibling.previousElementSibling.textContent;

  storedBook = storedBook.filter((book) => {
    if (book.title !== titeToBeRemoved) {
      return true;
    }
  });
};

function handleRemove(e) {
  deleteBook(e.target);
  localStorage.setItem('books', JSON.stringify(storedBook));
}

bookStore.addEventListener('click', handleRemove);

export { deleteBook, handleRemove };

export { addBook, clearFields };
