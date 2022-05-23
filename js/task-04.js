'use strict';

const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;

const increment = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
btnPlus.addEventListener('click', increment);

const decrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
btnMinus.addEventListener('click', decrement);

// btnMinus.addEventListener('click', () => {
//   counterValue -= 1;
//   value.textContent = counterValue;
// });
