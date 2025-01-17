import "./styles.css";
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderAbout } from "./about.js";

renderHome();

// Add event listeners to each button
let buttonHome = document.querySelector('#btn-home');
let buttonMenu = document.querySelector('#btn-menu');
let buttonAbout = document.querySelector('#btn-about');

function buttonSelect(button) {
    buttonHome.classList.remove('selected');
    buttonMenu.classList.remove('selected');
    buttonAbout.classList.remove('selected');

    button.classList.add('selected');
}

buttonHome.addEventListener('mouseup', () => { renderHome(); buttonSelect(buttonHome); })
buttonMenu.addEventListener('mouseup', () => { renderMenu(); buttonSelect(buttonMenu); })
buttonAbout.addEventListener('mouseup', () => { renderAbout(); buttonSelect(buttonAbout); })