// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');
const markup = galleryItems.map(({preview, original, description}) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>`
);

galleryEl.insertAdjacentHTML('beforeend', markup.join(''));

 new SimpleLightbox('.gallery a', { 
    captions: true, 
    captionsData: 'alt', 
    captionDelay: 250 
  });

galleryEl.addEventListener('click', event => event.preventDefault());

