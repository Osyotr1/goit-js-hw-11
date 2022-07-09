import Notiflix from "notiflix";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { moviesMarkup } from "./js/moviesMarkup";
import { fetchPics } from "./js/fetch";


const form = document.querySelector('#search-form');
const input = document.querySelector('input')
const gallery = document.querySelector('.gallery');
const loadMore = document.querySelector('.load-more');


let queryImg = '';
let page = 1;
const perPage = 40;


form.addEventListener('submit', onFetch)
loadMore.addEventListener('click', onLoad);
let lightBox = new SimpleLightbox('.gallery a')


function onFetch(event) {
    event.preventDefault();
    queryImg = input.value.trim();
    gallery.innerHTML = '';
    loadMore.classList.add('is-hidden');

    if (queryImg === '') {
        Notiflix.Notify.failure('The search string cannot be empty. Please specify your search query.');
        return;
    }

    fetchPics(queryImg, page, perPage).then(({data}) => {
        if (data.totalHits === 0) {
            Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
        } else {
            console.log(data.totalHits)
            gallery.insertAdjacentHTML('beforeend', moviesMarkup(data.hits))
            lightBox.refresh();
            if (data.totalHits > perPage) {
                loadMore.classList.remove('is-hidden');
            }
        }
    })
        .catch(error => console.log(error))
        .finally(() => {
            form.reset();
        });
};

function onLoad() {
    page += 1;
    lightBox.destroy();
    fetchPics(queryImg, page, perPage).then(({data}) => {
        gallery.insertAdjacentHTML('beforeend', moviesMarkup(data.hits))
        if (page * 40 > data.totalHits) {
            loadMore.classList.add('is-hidden');
            Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
            lightBox.refresh();
        }
    })
    .catch(error => console.log(error))
}



