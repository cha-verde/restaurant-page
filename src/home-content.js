import mieAyamImage from './bubur-ayam.jpg';
import pangsitImage from './pangsit.jpg';


const firstSection = document.createElement("div");
firstSection.setAttribute("class", "first-section");




const foodPhotoOne = document.createElement("img");
foodPhotoOne.src = mieAyamImage;
foodPhotoOne.setAttribute("class", "home-food-photo");


const homePhotoContainer = document.createElement("div");
homePhotoContainer.appendChild(foodPhotoOne);
homePhotoContainer.setAttribute("class", "home-photo-container");


firstSection.appendChild(homePhotoContainer);


const aboutSection = document.createElement("div");
aboutSection.setAttribute("class", "about-section");

const aboutText = document.createElement("p");
aboutText.textContent = "Welcome to Rasa, where the vibrant flavors of Indonesia come to life! At Rasa, we take pride in offering an authentic taste of Indonesia, bringing together traditional recipes passed down through generations and fresh, locally-sourced ingredients. Our menu showcases a rich array of bold, aromatic dishes—from savory rendang and fragrant nasi goreng to crispy tempeh and spicy sambals—that will transport your senses straight to the heart of Southeast Asia. Whether you're new to Indonesian cuisine or a seasoned fan, Rasa promises an unforgettable dining experience filled with warmth, flavor, and the spirit of Indonesian hospitality. Join us and discover the true essence of Rasa—where every bite tells a story."

aboutSection.appendChild(aboutText);

const hoursSection = document.createElement("div");
hoursSection.setAttribute("class", "hours-section");


const hoursPhoto = document.createElement("img");
hoursPhoto.src = pangsitImage;
hoursPhoto.setAttribute("class", "hours-photo");


const hoursPhotoContainer = document.createElement("div");
hoursPhotoContainer.appendChild(hoursPhoto);
hoursPhotoContainer.setAttribute("class", "hours-photo-container");

hoursSection.appendChild(hoursPhotoContainer)

const hoursText = document.createElement("div");
hoursText.setAttribute("class", "hours-text");

const hoursTitle = document.createElement("p");
hoursTitle.textContent = "HOURS";

hoursText.appendChild(hoursTitle);

const hoursList = document.createElement("ul");

const hours = ["Monday - Friday: 4pm to 10pm", "Saturday - Sunday: 5pm to 1am"];

hours.forEach(hour => {
    const item = document.createElement("li");
    const textNode = document.createTextNode(hour);
    item.appendChild(textNode);
    hoursList.appendChild(item);
});

hoursText.appendChild(hoursList);

hoursSection.appendChild(hoursText);

const mapContainer = document.createElement("div");
mapContainer.setAttribute("class", "map-container");

const mapTitle = document.createElement("p");
mapTitle.setAttribute("class", "map-title");
mapTitle.textContent = "FIND US"

mapContainer.appendChild(mapTitle);

const map = document.createElement("iframe");

map.width = "800"
map.height = "400"
map.src = "https://www.google.com/maps/embed/v1/place?q=seattle&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"

mapContainer.appendChild(map);

// const footerSection = document.createElement("div");
// footerSection.textContent = "© 2024 Rasa All Rights Reserved"
// footerSection.setAttribute("class", "footer-section");


const homeContent = document.createElement("div");
homeContent.setAttribute("class", "home-container");

homeContent.appendChild(firstSection)
homeContent.appendChild(aboutSection)
homeContent.appendChild(hoursSection)
homeContent.appendChild(mapContainer);

export {homeContent}