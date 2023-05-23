import './menuToggle.js';
import './select.js';

// window.onload = () => {

// }

const sliderElement = document.querySelector('.form__slider');
const minValue = document.querySelector('.form__slider-min-input');
const maxValue = document.querySelector('.form__slider-max-input');

minValue.value = 0;

noUiSlider.create(sliderElement, {
  start: [0, 900],
  connect: [false, true, false],
  step: 1,
  range: {
    min: [0],
    max: [1000],
  },
});

sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
  maxValue.value = unencoded[handle];
});
