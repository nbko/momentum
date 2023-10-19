const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
];

const curImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img"); //creating html from js

bgImg.src = `img/${curImg}`;

document.body.appendChild(bgImg);
