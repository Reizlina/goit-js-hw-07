'use strict';

const formInputEl = document.querySelector('#validation-input');
console.log(formInputEl);
const checkInput = Number(formInputEl.dataset.length);
console.log(checkInput);

formInputEl.addEventListener('blur', () => {
  if (formInputEl.value.length === checkInput) {
    formInputEl.classList.remove('invalid');
    formInputEl.classList.add('valid');
  } else {
    formInputEl.classList.remove('valid');
    formInputEl.classList.add('invalid');
  }
});
