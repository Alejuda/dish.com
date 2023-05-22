import "./style.css";
import showPopup from "./modules/showPopup.js";
import closeImg from './close.svg'

const closePopup = document.getElementById('close-btn');
closePopup.src = closeImg;
window.showPopup = showPopup;