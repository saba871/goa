const images = [
    {
        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
        src: "https://images.unsplash.com/photo-1517816428104-058f8d27b3f0",
    },
    {
        src: "https://images.unsplash.com/photo-1493244040629-496f6d136cc3",
    },
    {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
];
let index = 0;
const photo = document.getElementById("gallery");
const first = document.getElementById("next");
const second = document.getElementById("back");

function randomimages() {
    photo.src = images[index].src;
}

first.addEventListener("click", () => {
    index = (index + 1) % images.length;
    randomimages();
});

second.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    randomimages();
});

randomimages();
