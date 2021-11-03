import axios from 'axios';
const apiKey = '62e550dd1865c74989dd777e4514ffe1';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const fetchTrendMovies = async () => {
  return await axios
    .get(`trending/movie/day?api_key=${apiKey}`)
    .then(response => response.data.results);
};

const fetchMovieDetails = async movieId => {
  return await axios
    .get(`movie/${movieId}?api_key=${apiKey}&language=en-US`)
    .then(response => response.data);
};

const fetchMovies = async query => {
  return await axios
    .get(
      `search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`,
    )
    .then(response => response.data.results);
};

const fetchCast = async movieId => {
  return await axios
    .get(`movie/${movieId}/credits?api_key=${apiKey}&language=en-US`)
    .then(response => response.data.cast);
};

const fetchReviews = async movieId => {
  return await axios
    .get(`/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`)
    .then(response => response.data.results);
};

const fetch = {
  fetchTrendMovies,
  fetchMovieDetails,
  fetchMovies,
  fetchCast,
  fetchReviews,
};
export default fetch;
