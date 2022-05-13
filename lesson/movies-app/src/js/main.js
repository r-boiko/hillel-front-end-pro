import {getMovieDetails, getMovies} from "./api";

window.addEventListener('hashchange', e => {
  const {location: {hash}} = window;
  const [, movieId] = hash.split('=');

  getMovieDetails(movieId, '.root');
})

const checkUrl = () => {
  const {location: {hash}} = window;
  const [hashName, movieId] = hash.split('=');

  if(hashName === '#movieId') {
    getMovieDetails(movieId, '.root');
  } else {
    getMovies('popular', '.root');
  }
}

checkUrl();
