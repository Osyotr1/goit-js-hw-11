import axios from "axios";
import Notiflix from "notiflix";
import { moviesMarkup } from "./js/moviesMarkup";

const form = document.querySelector('#search-form');
const input = document.querySelector('input')
const gallery = document.querySelector('.gallery');

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common.Authorization = '28422237-ad1e99f44820901c4fb6da11b';
const BASE_URL = 'https://pixabay.com/api/';
const MY_KEY = '28422237-ad1e99f44820901c4fb6da11b';

form.addEventListener('submit', onFetch)

function onFetch(event) {
    event.preventDefault();
    console.log(input.value);
    const imagesQuery = input.value;
    return axios
        .get(`${BASE_URL}?key=${MY_KEY}&q=${imagesQuery}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => gallery.insertAdjacentHTML('beforeend', moviesMarkup(response.data.hits)))
        .catch(error => console.log(error));
};



// { webformatURL, tags, likes, views, comments, downloads }