import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

// npm install
// https://github.com/Specter-ode/goit-js-hw-08

// npm install simplelightbox
// npm install @vimeo/player
// npm i lodash.throttle








const galleryContainer = document.querySelector('.gallery');
const blockMarkUp = createImagesGallery(galleryItems);
galleryContainer.insertAdjacentHTML("afterbegin", blockMarkUp);
galleryContainer.addEventListener('click', onGalleryContainerClick);

function createImagesGallery (items) {
    return items
    .map ( ({ preview, original, description }) =>
      `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
              <img class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
              />
          </a>
      </div>`)
      .join('');
};
  
function onGalleryContainerClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    
    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}">`,
        {
            onShow: function () { 
                window.addEventListener("keydown", checkKeyEvent)
            },
            onClose: function () {
                window.removeEventListener("keydown", checkKeyEvent)
            }
        }
    )
    instance.show()

    function checkKeyEvent (event) {
        console.log(event.code)
        if (event.code === "Escape") {
            instance.close();
        }
    }
}