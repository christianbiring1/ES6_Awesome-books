/* eslint-disable no-unused-vars */

import { addBook, clearFields, addBtn } from './modules/addbook.js';
import { DateTime } from './modules/luxon.js';

const bookSection = document.querySelector('.book-section');
const addBookSection = document.querySelector('.add-section');
const contactSection = document.querySelector('.contact-section');

const linkList = document.querySelector('.list');
const AddNewLink = document.querySelector('.add');
const contactLink = document.querySelector('.contact');

linkList.addEventListener('click', () => {
  bookSection.style.display = 'block';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'none';
  linkList.style.color = 'blue';
  AddNewLink.style.color = 'black';
  contactLink.style.color = 'black';
});

AddNewLink.addEventListener('click', () => {
  bookSection.style.display = 'none';
  addBookSection.style.display = 'block';
  contactSection.style.display = 'none';
  AddNewLink.style.color = 'blue';
  linkList.style.color = 'black';
  contactLink.style.color = 'black';
});

contactLink.addEventListener('click', () => {
  bookSection.style.display = 'none';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'block';
  contactLink.style.color = 'blue';
  AddNewLink.style.color = 'black';
  linkList.style.color = 'black';
});

const headerDate = document.querySelector('.header-date');

const setDataTime = () => {
  const now = DateTime.now();
  const date = now.toLocaleString(DateTime.DATETIME_FULL);
  headerDate.innerHTML = date;
};
setDataTime();
