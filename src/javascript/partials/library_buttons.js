const watchedButton = document.querySelector('[data-watched]');
const queueButton = document.querySelector('[data-queue]');

function displayMovies(type) {
  const container = type === 'watched' ? document.getElementById('watchedMovies-container') : document.getElementById('queueMovies-container');
  container.innerHTML = ''; // Clear existing movies
  const movies = JSON.parse(localStorage.getItem(type)) || [];

  movies.forEach(movie => {
    const card = document.createElement('div');
    card.classList.add('card');
    const details = document.createElement('div');
    details.classList.add('details');
    let img = document.createElement('img');
    let title = document.createElement('h1');
    let genre = document.createElement('p');
    let year = document.createElement('p');

    img.src = Object.values(movie)[1][0];
    title.textContent = movie.key;
    genre.textContent = Object.values(movie)[1][2].join(', ');
    year.textContent = Object.values(movie)[1][1];

    card.appendChild(img);
    card.appendChild(title);
    details.appendChild(genre);
    details.appendChild(year);
    card.appendChild(details);

    container.appendChild(card);
  });
}

watchedButton.addEventListener('click', e => {
  if (!watchedButton.classList.contains('SelectedButton')) {
    e.target.classList.add('SelectedButton');
    queueButton.classList.remove('SelectedButton');
    displayMovies('watched');
  }
});

queueButton.addEventListener('click', e => {
  if (!queueButton.classList.contains('SelectedButton')) {
    e.target.classList.add('SelectedButton');
    watchedButton.classList.remove('SelectedButton');
    displayMovies('queue');
  }
});

const backToHomeButton = document.querySelector('.LogoWraper');
backToHomeButton.addEventListener('click', () => {
  window.location.href = 'index.html';
});
