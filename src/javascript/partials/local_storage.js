document.addEventListener('DOMContentLoaded', () => {
    loadWatchedMovies();
  });
  
  function loadWatchedMovies() {
    const watchedMoviesContainer = document.getElementById('watchedMovies-container');
    const watchedMovies = JSON.parse(localStorage.getItem('watched')) || [];
  
    watchedMoviesContainer.innerHTML = ''; // Clear existing content
  
    watchedMovies.forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('card');
      const details = document.createElement('div');
      details.classList.add('details');
      let img = document.createElement('img');
      let title = document.createElement('h1');
      let genre = document.createElement('p');
      let year = document.createElement('p');
  
      img.src = movie.image;
      title.textContent = movie.title;
      genre.textContent = movie.genre;
      year.textContent = movie.year;
  
      card.appendChild(img);
      card.appendChild(title);
      details.appendChild(genre);
      details.appendChild(year);
      card.appendChild(details);
  
      watchedMoviesContainer.appendChild(card);
    });
  }
  function loadQueueMovies() {
    const queueMoviesContainer = document.getElementById('queueMovies-container');
    const queueMovies = JSON.parse(localStorage.getItem('queue')) || [];
  
    queueMoviesContainer.innerHTML = ''; // Clear existing content
  
    queueMovies.forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('card');
      const details = document.createElement('div');
      details.classList.add('details');
      let img = document.createElement('img');
      let title = document.createElement('h1');
      let genre = document.createElement('p');
      let year = document.createElement('p');
  
      img.src = movie.image;
      title.textContent = movie.title;
      genre.textContent = movie.genre;
      year.textContent = movie.year;
  
      card.appendChild(img);
      card.appendChild(title);
      details.appendChild(genre);
      details.appendChild(year);
      card.appendChild(details);
  
      queueMoviesContainer.appendChild(card);
    });
  }