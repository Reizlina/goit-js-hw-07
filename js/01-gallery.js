'use strict';
import { galleryItems } from './gallery-items.js';
// Change code below this line

//* _____________Add img to page_____________

const gallery = document.querySelector('.gallery');
let instance;

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
gallery.addEventListener('click', onImgClick);

function onImgClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
  instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);

  instance.show();
  window.addEventListener('keydown', onEscPressKey);
}

// *________________Escape____________________

function onEscPressKey(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
  window.removeEventListener('keydown', onEscPressKey);
}
