import zeffImg from "./zeff.png";

const image = document.createElement("img");
const title = document.createElement("h3");
const about = document.createElement("div");
const aboutText = document.createElement("div");
const description = document.createElement("p");

export function renderAbout() {

    // Clear content div
    content.innerHTML = "";

    // Create image element
    image.src = zeffImg;

    // Create title element
    title.classList.add("about-title");
    title.innerHTML = 'Welcome to Baratie – The Finest Floating Restaurant on the Grand Line!'

    // Create description element
    description.classList.add("about-description");
    description.innerHTML = `Set sail for a dining experience like no other at Baratie, the legendary sea-bound restaurant known for its world-class cuisine and vibrant atmosphere! Founded by the renowned Head Chef Zeff, Baratie serves gourmet meals to pirates, marines, and travelers alike—no matter where their allegiances lie. From our famous seafood dishes to hearty stews that can satisfy even the fiercest of appetites, every plate is crafted with passion and precision. Dock your ship, enjoy breathtaking ocean views, and experience the hospitality of our skilled chefs and lively crew. Just remember—cause trouble, and you might find yourself on the wrong end of a flying kick!`;


    aboutText.appendChild(title);
    aboutText.appendChild(description);

    // Add the elements to content
    about.appendChild(image);
    about.appendChild(aboutText);
    about.classList.add("about");

    content.appendChild(about);

    console.log("render menu!");
}