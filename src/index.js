import "./styles.css"
import { homeContent } from "./home-content.js";
import { menuContent } from "./menu-content.js";
import { reservationContent } from "./reservation-content.js";

import logoImage from './rasa-logo.png';



const logo = document.createElement("img");
logo.src = logoImage;
logo.setAttribute("class", "logo-image");

const logoText = document.createElement("h1");
logoText.setAttribute("class", "logo-text");
logoText.textContent = "Indonesian Cuisine";

const logoSection = document.createElement("div");
logoSection.setAttribute("class", "logo-section");
logoSection.appendChild(logo);
logoSection.appendChild(logoText);

const sideNav = document.querySelector(".side-nav");
sideNav.appendChild(logoSection);


const contentElement = document.querySelector("#content");

contentElement.appendChild(homeContent);

const homeButton = document.querySelector("#home-button");

homeButton.addEventListener("click", () => {
    contentElement.replaceChildren();
    contentElement.appendChild(homeContent);
})

const menuButton = document.querySelector("#menu-button");

menuButton.addEventListener("click", () => {
    contentElement.replaceChildren();
    contentElement.appendChild(menuContent);
})

const reservationButton = document.querySelector("#reservation-button");

reservationButton.addEventListener("click", () => {
    contentElement.replaceChildren();
    contentElement.appendChild(reservationContent);
})