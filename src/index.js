import './style.css';
import logo from './assets/logo.png';
import { selectedDrop, getMyData } from './modules/renderElements.js';
import showPopup from './modules/showPopup.js';
import closePopup from './modules/closePopup.js';
import closeImg from './close.svg';
import postCommit from './modules/postCommit.js';
import fetchCommmits from './modules/fetchCommits.js';
import commentCounter from './modules/commentCounter.js';
import postLike from './modules/likes.js';
import search from './modules/search.js';

const submit = document.querySelector('.submit');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const catogray = document.getElementById('catogary');
const typeOrArea = document.getElementById('typeOrArea');
const closePopupImg = document.getElementById('close-btn');
const commentsNumber = document.getElementById('comments-number');
const searchBtn = document.getElementById('search-btn');
const listSection = document.querySelector('.list-sec');
const searchSection = document.querySelector('.search-sec');
const listButton = document.querySelector('.list');
const searchButton = document.querySelector('.search');
const footerLine = document.querySelector('.footerLine');
const contactSec = document.querySelector('.contact-section');
const contactButton = document.querySelector('.contact');

const showList = () => {
  listSection.style.display = 'block';
  searchSection.style.display = 'none';
  contactSec.style.display = 'none';
  footer.classList.remove('margin');
  footerLine.classList.remove('margin-top');
  footer.classList.remove('contact-margin');
  footerLine.classList.remove('contact-margin-top');
};

const showSeacrch = () => {
  listSection.style.display = 'none';
  searchSection.style.display = 'block';
  contactSec.style.display = 'none';
  footer.classList.add('margin');
  footerLine.classList.add('margin-top');
  footer.classList.remove('contact-margin');
  footerLine.classList.remove('contact-margin-top');
};

const showContact = () => {
  listSection.style.display = 'none';
  searchSection.style.display = 'none';
  contactSec.style.display = 'block';
  footer.classList.add('contact-margin');
  footerLine.classList.add('contact-margin-top');
  footer.classList.remove('margin');
  footerLine.classList.remove('margin-top');
};

listButton.addEventListener('click', () => {
  showList();
});

searchButton.addEventListener('click', () => {
  showSeacrch();
});

contactButton.addEventListener('click', () => {
  showContact();
});
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

searchBtn.addEventListener('click', () => {
  search();
});

window.addEventListener('DOMContentLoaded', () => {
  renderLogo();
  fillFooter();
  selectedDrop('c').then(() => {
    getMyData();
  });
  showList();
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
  const numberOfComments = await commentCounter(window.popupElementd);
  commentsNumber.innerText = numberOfComments;
});
window.postLike = postLike;
