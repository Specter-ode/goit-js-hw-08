import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector('.gallery');
const blockMarkUp = createImagesGallery(galleryItems);
galleryContainer.insertAdjacentHTML("afterbegin", blockMarkUp);

function createImagesGallery (items) {
    return items
    .map ( ({ preview, original, description }) =>
          `<a class="gallery__item" href="${original}">
              <img class="gallery__image"
              src="${preview}"
              alt="${description}"
              />
          </a>`)
      .join('');
};

const lightbox = new SimpleLightbox('.gallery a', { 
    "captionsData": "alt",
    "captionDelay": 250,
    "captionPosition": "bottom"
  });