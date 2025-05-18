const img = document.querySelector("img");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const imagesUrls = [
    "img/house1.jpg",
    "img/house2.jpg",
    "img/hpuse3.jpg",
    "img/house4.jpg",
];
let index = 1;

nextBtn.addEventListener("click", () => {
    index++;
    if (index >= imagesUrls.length) {
        index = 0;
    }
    img.src = imagesUrls[index];
});

prevBtn.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = imagesUrls.length - 1;
    }
    img.src = imagesUrls[index];
});
