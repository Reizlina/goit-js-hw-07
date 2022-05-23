'use strict';

const inputForm = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

inputForm.addEventListener('input', event => {
  output.textContent = event.target.value;
  if (event.target.value.length > 0) {
    output.innerHTML = event.target.value;
    return;
  }
  output.innerHTML = 'Anonymous';
});
