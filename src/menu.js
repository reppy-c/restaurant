// Get image assets

import allbluestewImg from "./allbluestew.png";
import fiestariceImg from "./fiestarice.png";
import ramendelightImg from "./ramendelight.png";
import berryImg from "./berry.png";

// Define arrays of static content
let menuItems = [
    {   
        name: "All Blue Stew", 
        img: allbluestewImg, 
        description: "Sea King meat chunks, Grand Line cabbage, orange carrots from Cocoyashi Village, East Blue potatoes, and a savory spice-rich broth with a dash of Calm Belt sea salt.",
        blurb: "A hearty stew inspired by the mythical All-Blue, blending the unique flavors of every sea into one unforgettable dish. A must-try for any pirate dreaming of culinary treasure!",
        price: "1,800 berry"
    },
    { 
        name: "Baratie's Seafood Fiesta Rice", 
        img: fiestariceImg, 
        description: "Golden saffron rice, South Blue shrimp, Calm Belt squid rings, shellfish from the All-Blue, Grand Line bell peppers, and a garnish of citrus zest from Sniper Island lemons." ,
        blurb: "A vibrant rice dish crafted with seafood straight from the Grand Line, capturing the adventurous essence of Baratie’s floating restaurant. Every bite feels like a journey through the seas.",
        price: "4,300 berry"
    },
    { 
        name: "East Blue Ramen Delight", 
        img: ramendelightImg, 
        description: "Ramen noodles, broth made from East Blue seaweed and fish, fish cake shaped like the Jolly Roger, steamed asparagus spears, and a drizzle of syrup from Syrup Village.",
        blurb: "A light yet flavorful ramen soup inspired by the peaceful yet daring waters of East Blue. Perfect for recharging before setting sail on new adventures.",
        price: "2,500 berry"
    }
];

// Define variables
const content = document.querySelector('#content');
const berry = document.createElement("img");
berry.src = berryImg;

export function renderMenu() {

    // Clear content div
    content.innerHTML = "";
    const menu = document.createElement("div");

    // Loop through the menu items and create elements for each
    menuItems.forEach(element => {
        const menuItem = document.createElement("div");
        const menuItemImg = document.createElement("img");
        const menuItemText = document.createElement("div");
        const menuItemTextTitle = document.createElement("h3");
        const menuItemTextDesc = document.createElement("p");
        const menuItemTextBlurb = document.createElement("p");
        const menuItemTextPrice = document.createElement("span");
        
        menu.classList.add("menu");
        menuItem.classList.add("menu-item");
        menuItemText.classList.add("menu-text");
        menuItemTextTitle.classList.add("menu-title");
        menuItemTextDesc.classList.add("menu-desc");
        menuItemTextBlurb.classList.add("menu-blurb");
        menuItemTextPrice.classList.add("menu-price");

        menuItemImg.src=element.img;
        menuItemTextTitle.innerHTML = element.name;
        menuItemTextDesc.innerHTML = element.description;
        menuItemTextBlurb.innerHTML = element.blurb;
        menuItemTextPrice.innerHTML = element.price;

        menuItem.appendChild(menuItemImg);
        menuItem.appendChild(menuItemText);

        menuItemText.appendChild(menuItemTextTitle);
        menuItemText.appendChild(menuItemTextDesc);
        menuItemText.appendChild(menuItemTextBlurb);
        menuItemText.appendChild(menuItemTextPrice);

        menu.appendChild(menuItem);    
    });

    content.appendChild(menu);
    console.log("render menu!");
}