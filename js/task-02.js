'use strict';

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');

const item = ingredients.map(el => {
  const item = document.createElement('li');
  item.className = 'item';
  item.textContent = el;
  return item;
});

list.append(...item);

console.log(item);
