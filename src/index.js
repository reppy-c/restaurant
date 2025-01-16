import "./styles.css";
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderAbout } from "./about.js";

renderHome();

// Add event listeners to each button
let buttonHome = document.querySelector('#btn-home');
let buttonMenu = document.querySelector('#btn-menu');
let buttonAbout = document.querySelector('#btn-about');

buttonHome.addEventListener('mouseup', () => { renderHome(); })
buttonMenu.addEventListener('mouseup', () => { renderMenu(); })
buttonAbout.addEventListener('mouseup', () => { renderAbout(); })