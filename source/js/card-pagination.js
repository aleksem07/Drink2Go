const paginationBox = document.querySelector(".pagination");
const paginationPage = document.querySelectorAll(".pagination__page");
const paginationNext = document.querySelector(".next");
const paginationPrev = document.querySelector(".back");
const paginationMobileNext = document.querySelector(".arrow-mobile--next");
const paginationMobilePrev = document.querySelector(".arrow-mobile--back");

const MIN_PAGE = 1;
const MAX_PAGE = paginationPage.length;

let actualPage = 2;
paginationBox.addEventListener("click", (evt) => {
  evt.preventDefault();

  if (
    evt.target.classList.contains("next") ||
    evt.target.classList.contains("arrow-mobile--next") ||
    evt.target.classList.contains("arrow-mobile__next")
  ) {
    actualPage++;
    if (actualPage === MAX_PAGE) {
      paginationNext.style.visibility = "hidden";
      paginationMobileNext.style.visibility = "hidden";
    }
    if (actualPage > MIN_PAGE) {
      paginationPrev.style.visibility = "visible";
      paginationMobilePrev.style.visibility = "visible";
    }

    for (let i = 0; i < paginationPage.length; i++) {
      if (paginationPage[i].classList.contains("pagination__item--active")) {
        paginationPage[i].classList.remove("pagination__item--active");
        paginationPage[i + 1].classList.add("pagination__item--active");
        return;
      }
    }
  } else if (
    evt.target.classList.contains("back") ||
    evt.target.classList.contains("arrow-mobile--back") ||
    evt.target.classList.contains("arrow-mobile__back")
  ) {
    actualPage--;
    if (actualPage < MAX_PAGE) {
      paginationNext.style.visibility = "visible";
      paginationMobileNext.style.visibility = "visible";
    }
    if (actualPage === MIN_PAGE) {
      paginationPrev.style.visibility = "hidden";
      paginationMobilePrev.style.visibility = "hidden";
    }

    for (let i = 0; i < paginationPage.length; i++) {
      if (paginationPage[i].classList.contains("pagination__item--active")) {
        paginationPage[i].classList.remove("pagination__item--active");
        paginationPage[i - 1].classList.add("pagination__item--active");
        return;
      }
    }
  }
});
