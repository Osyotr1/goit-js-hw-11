import axios from "axios";
export { fetchPics };

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '28422237-ad1e99f44820901c4fb6da11b';

async function fetchPics(queryImg, page, perPage) {
    return await axios.get(`?key=${KEY}&q=${queryImg}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`)
}