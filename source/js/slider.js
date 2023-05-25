const sliderLeft = document.querySelectorAll(".slider--left");
const sliderRight = document.querySelectorAll(".slider--right");

const slides = document.querySelector(".slider");
const slidesArr = slides.querySelectorAll(".wrapper");

const paginationButtons = document.querySelectorAll(
  ".slider__pagination-button"
);

let actualPage = 0;

const hiddenAllSlides = () => {
  for (let i = 0; i < slidesArr.length; i++) {
    slidesArr[i].classList.add("slide-hidden");
    paginationButtons[i].classList.remove("active");
  }
  slidesArr[actualPage].classList.remove("slide-hidden");
  paginationButtons[actualPage].classList.add("active");
};
hiddenAllSlides();

slides.addEventListener("click", (evt) => {
  if (
    evt.target.classList.contains("slider--right") ||
    evt.target.classList.contains("slider__arrow-right")
  ) {
    actualPage++;
    if (actualPage > 2) {
      actualPage = 0;
    }
    hiddenAllSlides();
  }
  if (
    evt.target.classList.contains("slider--left") ||
    evt.target.classList.contains("slider__arrow-left")
  ) {
    actualPage--;
    if (actualPage < 0) {
      actualPage = 2;
    }
    hiddenAllSlides();
  }
});
