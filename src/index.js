import "./style.css";
import showPopup from "./modules/showPopup.js";
import closePopup from "./modules/closePopup";
import closeImg from './close.svg'

const closePopupImg = document.getElementById('close-btn');
closePopupImg.src = closeImg;
closePopupImg.addEventListener('click', () => closePopup());

window.showPopup = showPopup;