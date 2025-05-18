let index = 0;
const container = document.getElementById("slideContainer");
const slideWidth = 600;
const slidesCount = container.children.length;

function goToSlide(i) {
    index = (i + slidesCount) % slidesCount;
    container.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
    goToSlide(index + 1);
}

function prevSlide() {
    goToSlide(index - 1);
}
