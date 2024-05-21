

document.addEventListener('DOMContentLoaded', () => {
  const watchedButton = document.querySelector('button[data-watched]');
  const queueButton = document.querySelector('button[data-queue]');
  const watchedMoviesSection = document.querySelector('.watched-movies-section');
  const queueSection = document.querySelector('.queue-section');

  function renderMovies(movies, container) {
    container.innerHTML = '';
    movies.forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('card');
      const img = document.createElement('img');
      const title = document.createElement('h1');
      const genre = document.createElement('p');
      const year = document.createElement('p');

      img.src = movie.image;
      title.textContent = movie.title;
      genre.textContent = movie.genre;
      year.textContent = movie.year;

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(genre);
      card.appendChild(year);
      container.appendChild(card);
    });
  }

  function displayMovies(key, container) {
    const movies = JSON.parse(localStorage.getItem(key)) || [];
    renderMovies(movies, container);
  }

  function updateActiveSection(section) {
    if (section === 'watched') {
      watchedMoviesSection.classList.add('active');
      queueSection.classList.remove('active');
      watchedButton.classList.add('SelectedButton');
      queueButton.classList.remove('SelectedButton');
      displayMovies('watchedMovies', watchedMoviesSection.querySelector('#watched-movies-container'));
    } else if (section === 'queue') {
      watchedMoviesSection.classList.remove('active');
      queueSection.classList.add('active');
      watchedButton.classList.remove('SelectedButton');
      queueButton.classList.add('SelectedButton');
      displayMovies('queueMovies', queueSection.querySelector('#queue-container'));
    }
  }

  watchedButton.addEventListener('click', () => {
    updateActiveSection('watched');
    localStorage.setItem('activeSection', 'watched');
  });

  queueButton.addEventListener('click', () => {
    updateActiveSection('queue');
    localStorage.setItem('activeSection', 'queue');
  });

  const backToHomeButton = document.querySelector('.LogoWraper');
  backToHomeButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  // Check localStorage for the active section and update accordingly
  const activeSection = localStorage.getItem('activeSection') || 'watched';
  updateActiveSection(activeSection);
});

