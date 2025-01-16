import baratieImg from "./baratie.png";

// Define variables
const content = document.querySelector('#content');
const image = document.createElement("img");
const description = document.createElement("p");

export function renderHome() {

    // Clear content div
    content.innerHTML = "";

    // Create image element
    image.src = baratieImg;
    image.classList.add("logo");

    // Create description element
    description.classList.add("description");
    description.innerHTML = `Baratie: the legendary floating restaurant serving gourmet cuisine with a side of adventure! Run by Chef Zeff, it's a must-visit for food lovers and seafarers seeking an unforgettable dining experience.`;

    // Add the elements to content
    content.appendChild(image);
    content.appendChild(description);

    console.log("render home!");
}