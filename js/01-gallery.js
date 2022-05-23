'use strict';
import { galleryItems } from './gallery-items.js';
// Change code below this line

//* _____________Add img to page_____________

const gallery = document.querySelector('.gallery');

function addItem() {
  return galleryItems
    .map(
      items => `<div class="gallery__item"><a class="gallery__link" href="${items.original}"> <img
                    class="gallery__image"
                    src="${items.preview}"
                    data-source="${items.original}"
                    alt="${items.description}"/></a></div>`
    )
    .join('');
}

gallery.insertAdjacentHTML('afterbegin', addItem(galleryItems));

console.log(galleryItems);

// * _____________Delegation_____________

const onImgClick = event => {
  //   event.preventDefault();
  const currentItem = event.target;

  if (currentItem.nodeName !== 'IMG') {
    return;
  }

  const currentImg = currentItem.datset.original;

  //   const currentColor = currentItem.dataset.color;
  //   const outputEl = currentItem.querySelector('.pallet__item-color');

  //   outputEl.textContent = currentColor;
};

currentItem.addEventListener('click', onImgClick);
