import './menuToggle.js';

// window.onload = () => {

// }

const sliderElement = document.querySelector('.form__slider');
const minValue = document.querySelector('.form__slider__min-input');
const maxValue = document.querySelector('.form__slider__max-input');

minValue.value = 0;

noUiSlider.create(sliderElement, {
  start: [0, 123],
  connect: [false, true, false],
  step: 1,
  range: {
    min: [0],
    max: [137],
  },
});

sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
  maxValue.value = unencoded[handle];
  console.log(handle);
  console.log(unencoded);
});