import './style.css';
import logo from './assets/logo.png';
import { selectedDrop, getMyData } from './modules/renderElements.js';

const submit = document.querySelector('.submit');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const catogray = document.getElementById('catogary');
const typeOrArea = document.getElementById('typeOrArea');
const renderLogo = () => {
  const myLogo = new Image();
  myLogo.src = logo;
  myLogo.className = 'logo';
  header.append(myLogo);
};

const fillFooter = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  footer.append(document.createTextNode(`Copyright © ${currentYear} Ahmed & Nacho. All Rights Reserved`));
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
  selectedDrop('c')
    .then(() => {
      getMyData();
    });
});
