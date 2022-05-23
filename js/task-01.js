'use strict';

const totalEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalEl.length}`);

for (const el of totalEl) {
  console.log(`Category: ${el.firstElementChild.textContent}
Elements: ${el.querySelectorAll('li').length}`);
}
