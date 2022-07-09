export { moviesMarkup };

function moviesMarkup(movies) {
    return movies.map(movie =>
                `<a class="gallery__link" href="${movie.largeImageURL}">
                <div class="photo-card">
                <img src="${movie.webformatURL}" alt="${movie.tags}" loading="lazy" />
                    <div class="info">
                    <p class="info-item">
                        <b><span class="under-text">Likes:</span> ${movie.likes}</b>
                    </p>
                    <p class="info-item">
                        <b><span class="under-text">Views:</span> ${movie.views}</b>
                    </p>
                    <p class="info-item">
                        <b><span class="under-text">Comments:</span> ${movie.comments}</b>
                    </p>
                    <p class="info-item">
                        <b><span class="under-text">Downloads:</span> ${movie.downloads}</b>
                    </p>
                    </div>
                </div>
                </a>`
    ).join('');
}
