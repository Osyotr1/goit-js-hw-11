import axios from "axios";
import Notiflix from "notiflix";

const form = document.querySelector('#search-form');
const input = document.querySelector('input')

// axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.headers.common.Authorization = '28422237-ad1e99f44820901c4fb6da11b';
const BASE_URL = 'https://pixabay.com/api/';
const MY_KEY = '28422237-ad1e99f44820901c4fb6da11b';

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(input.value);
    const imagesQuery = input.value;
    axios
        .get(`${BASE_URL}?key=${MY_KEY}&q=${imagesQuery}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
});