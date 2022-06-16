const btnPrev = document.getElementById("select-prev");
const btnNext = document.getElementById("select-next");
let slides = document.querySelectorAll(".slide");
let index = 0;
const activeSlide = (n) => {
    for (slide of slides) {
        slide.classList.remove("active");
        slides[n].classList.add("active");
    }
};
const nextSlide = () => {
    if (index == slides.length - 1) {
        btnNext.disabled = true;
    } else {
        index++;
        activeSlide(index);
    }
};
const prevSlide = () => {
    if (index == 0) {
        btnPrev.disabled = true;
    } else {
        index--;
        activeSlide(index);
    }
};
btnNext.addEventListener(`click`, nextSlide);
btnPrev.addEventListener(`click`, prevSlide);
