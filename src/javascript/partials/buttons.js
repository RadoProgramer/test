import axios from 'axios';
import { createModalTemplate, openModal } from './modal.js';

const container = document.getElementById('movie-container');
const basicImage = 'https://image.tmdb.org/t/p/w500';
const url = 'https://api.themoviedb.org/3/discover/movie?api_key=b942b8bf626a04f48b07153a95ee51a0';
let array = [];
let globalNumber = 1;
const buttons = document.querySelector('.buttons');

const arrayMoves = [
  { 28: 'Action' },
  { 12: 'Adventure' },
  { 16: 'Animation' },
  { 35: 'Comedy' },
  { 80: 'Crime' },
  { 99: 'Documentary' },
  { 18: 'Drama' },
  { 10751: 'Family' },
  { 14: 'Fantasy' },
  { 36: 'History' },
  { 27: 'Horror' },
  { 10402: 'Music' },
  { 9648: 'Mystery' },
  { 10749: 'Romance' },
  { 878: 'Science Fiction' },
  { 10770: 'TV Movie' },
  { 53: 'Thriller' },
  { 10752: 'War' },
  { 37: 'Western' },
];

function changeValue(array) {
  const keys = [];
  const values = [];
  const response = [];

  arrayMoves.map(element => {
    keys.push(Object.keys(element)[0]);
    values.push(Object.values(element)[0]);
  });

  array.map(element => {
    const value = keys.indexOf(element.toString());
    response.push(values[value]);
  });
  return response;
}

function addToQueue(movie) {
  const queue = JSON.parse(localStorage.getItem('queue')) || [];
  // Check if the movie already exists in the queue to avoid duplicates
  if (!queue.some(m => m.key === movie.key)) {
    queue.push(movie);
    localStorage.setItem('queue', JSON.stringify(queue));
  }
}

async function fetchMove(number = 1) {
  globalNumber = number;
  try {
    array = [];
    let response = await axios.get(`${url}&page=${number}`);
    response.data['results'].forEach(element => {
      let obj = {};
      obj.key = element['title'];
      obj.value = [
        basicImage + element['poster_path'],
        element['release_date'].substring(0, 4),
        changeValue(element['genre_ids']),
        element['original_title'],
        element['overview'],
        element['popularity'],
        element['vote_average'],
        element['vote_count'],
      ];

      array.push(obj);
    });
    array.forEach(element => {
      const card = document.createElement('div');
      card.classList.add('card');
      const details = document.createElement('div');
      details.classList.add('details');
      let img = document.createElement('img');
      let title = document.createElement('h1');
      let genre = document.createElement('p');
      let year = document.createElement('p');

      img.src = Object.values(element)[1][0];
      title.textContent = element.key;
      genre.textContent = Object.values(element)[1][2].join(', ');
      year.textContent = Object.values(element)[1][1];

      card.appendChild(img);
      card.appendChild(title);
      details.appendChild(genre);
      details.appendChild(year);
      card.appendChild(details);

      const addToQueueButton = document.createElement('button');
      addToQueueButton.textContent = 'ADD TO QUEUE';
      addToQueueButton.addEventListener('click', () => {
        addToQueue(element);
        alert(`${element.key} has been added to your queue.`);
      });
      card.appendChild(addToQueueButton);

      container.appendChild(card);

      card.addEventListener('click', () => {
        const selectedMovie = {
          title: element.key,
          image: Object.values(element)[1][0],
          genre: Object.values(element)[1][2].join(', '),
          year: Object.values(element)[1][1],
          originalTitle: Object.values(element)[1][3],
          overview: Object.values(element)[1][4],
          popularity: Object.values(element)[1][5],
          voteAverage: Object.values(element)[1][6],
          voteCount: Object.values(element)[1][7],
        };
        createModalTemplate();
        openModal(selectedMovie);
      });
    });
  } catch (error) {
    console.error('Wystąpił błąd:', error);
  }
}
fetchMove();

buttons.addEventListener('click', event => {
  const values = Array.from(buttons.children);
  const target = event.target.textContent;
  const number = parseInt(target);
  const firstChild = buttons.firstElementChild;
  const lastChild = buttons.lastElementChild;
  container.innerHTML = '';

  if (event.target === firstChild) {
    const choosedNumber = parseInt(localStorage.getItem('globalNumber')) - 1;
    localStorage.setItem('globalNumber', choosedNumber);
    fetchMove(choosedNumber);
  } else if (event.target === lastChild) {
    const choosedNumber = parseInt(localStorage.getItem('globalNumber')) + 1;
    localStorage.setItem('globalNumber', choosedNumber);
    fetchMove(choosedNumber);
  } else {
    localStorage.setItem('globalNumber', number);
    fetchMove(number);
  }
});
