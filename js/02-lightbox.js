import { galleryItems } from './gallery-items.js';
// Change code below this line

// *_________________ADD________________
const gallery = document.querySelector('.gallery');
// let instance;

function addItem() {
  return galleryItems
    .map(
      items => `<a class="gallery__item" href="${items.original}">
  <img class="gallery__image" src="${items.preview}" alt="${items.description}" />
</a>`
    )
    .join('');
}
gallery.insertAdjacentHTML('afterbegin', addItem(galleryItems));

console.log(galleryItems);

// *_____________USE__________________

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
