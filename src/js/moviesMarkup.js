export { moviesMarkup };

function moviesMarkup(movies) {
    return movies.map(movie =>
                `<div class="photo-card">
                <img src="${movie.webformatURL}" alt="${movie.tags}" loading="lazy" />
                    <div class="info">
                    <p class="info-item">
                        <b>Likes:${movie.likes}</b>
                    </p>
                    <p class="info-item">
                        <b>Views:${movie.views}</b>
                    </p>
                    <p class="info-item">
                        <b>Comments:${movie.comments}</b>
                    </p>
                    <p class="info-item">
                        <b>Downloads:${movie.downloads}</b>
                    </p>
                    </div>
                </div>`
    ).join('');
}
