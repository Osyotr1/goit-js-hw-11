// import axios from "axios";
import Notiflix from "notiflix";
import { moviesMarkup } from "./js/moviesMarkup";
import { fetchPics } from "./js/fetch";

const form = document.querySelector('#search-form');
const input = document.querySelector('input')
const gallery = document.querySelector('.gallery');

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common.Authorization = '28422237-ad1e99f44820901c4fb6da11b';
let queryImg = '';
let page = 1;
const perPage = 40;


form.addEventListener('submit', onFetch)

function onFetch(event) {
    event.preventDefault();
    queryImg = input.value.trim();
    console.log(queryImg);
    if (queryImg === '') {
        Notiflix.Notify.failure('The search string cannot be empty. Please specify your search query.');
        return;
    }
    fetchPics(queryImg, page, perPage).then(response => {
        if (response.data.totalHits === 0) {
            console.log('no images');
            Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
        } else {
            gallery.insertAdjacentHTML('beforeend', moviesMarkup(response.data.hits))
        }
    })
        .catch(error => console.log(error));
};



// { webformatURL, tags, likes, views, comments, downloads }