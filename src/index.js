import './style.css';
import logo from './assets/logo.png';
import { selectedDrop, getMyData } from './modules/renderElements.js';
import showPopup from './modules/showPopup.js';
import closePopup from './modules/closePopup.js';
import closeImg from './close.svg';
import postCommit from './modules/postCommit.js';
import fetchCommmits from './modules/fetchCommits.js';

const submit = document.querySelector('.submit');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const catogray = document.getElementById('catogary');
const typeOrArea = document.getElementById('typeOrArea');
const closePopupImg = document.getElementById('close-btn');

const renderLogo = () => {
  const myLogo = new Image();
  myLogo.src = logo;
  myLogo.className = 'logo';
  header.append(myLogo);
};

const fillFooter = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  footer.append(
    document.createTextNode(
      `Copyright © ${currentYear} Ahmed & Nacho. All Rights Reserved`,
    ),
  );
};

catogray.addEventListener('change', () => {
  typeOrArea.innerHTML = '';
  selectedDrop(catogray.value);
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  getMyData();
});

window.addEventListener('DOMContentLoaded', () => {
  renderLogo();
  fillFooter();
  selectedDrop('c').then(() => {
    getMyData();
  });
});

closePopupImg.src = closeImg;
closePopupImg.addEventListener('click', () => closePopup());

window.showPopup = showPopup;

const postForm = document.getElementById('post-comment-form');
const nameInput = document.getElementById('name');
const commentInput = document.getElementById('commit');
const commitContainer = document.getElementById('commits-container');

postForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  await postCommit(window.popupElementd, nameInput.value, commentInput.value);
  const newCommits = await fetchCommmits(window.popupElementd);
  commitContainer.innerHTML = newCommits;
  nameInput.value = '';
  commentInput.value = '';
});
