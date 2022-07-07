// import axios from "axios";
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

function onFetch(event) {
    event.preventDefault();
    queryImg = input.value.trim();
    gallery.innerHTML = '';
    loadMore.classList.add('is-hidden');
    if (queryImg === '') {
        Notiflix.Notify.failure('The search string cannot be empty. Please specify your search query.');
        return;
    }
    fetchPics(queryImg, page, perPage).then(response => {
        if (response.data.totalHits === 0) {
            Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
        } else {
            gallery.insertAdjacentHTML('beforeend', moviesMarkup(response.data.hits))
            simpleLightBox = new SimpleLightbox('.gallery a').refresh();
            if (response.data.totalHits > perPage) {
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
    fetchPics(queryImg, page, perPage).then(response => {
        gallery.insertAdjacentHTML('beforeend', moviesMarkup(response.data.hits))
        if (page * 40 > response.data.totalHits) {
            loadMore.classList.add('is-hidden');
            Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
            simpleLightBox = new SimpleLightbox('.gallery a').refresh();
        }
    })
    .catch(error => console.log(error))
}



