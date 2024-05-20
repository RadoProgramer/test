
document.addEventListener('DOMContentLoaded', () => {
  displayMovies('watchedMovies', 'watchedMovies-container');
  displayMovies('queueMovies', 'queueMovies-container');
});

function displayMovies(storageKey, containerId) {
  const movies = JSON.parse(localStorage.getItem(storageKey)) || [];
  const container = document.getElementById(containerId);

  movies.forEach(movie => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = movie.image;

    const title = document.createElement('h1');
    title.textContent = movie.title;

    const genre = document.createElement('p');
    genre.textContent = movie.genre;

    const year = document.createElement('p');
    year.textContent = movie.year;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(genre);
    card.appendChild(year);
    container.appendChild(card);
  });
}
