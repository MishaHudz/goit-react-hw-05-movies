import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTUyYWExMWNlZTIwZWQ3MmNlODBlNTQ3ODk5ZTBiMiIsInN1YiI6IjY0N2UyNDE3Y2NkZTA0MDExOGFhYTZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ScOi38rHNRdHf25i9RPscLJw2wEJk6tQ_ks7iMhFAhw',
  },
};

export async function getMostPopularFilms() {
  const { data } = await axios('/trending/movie/day', options);

  return data;
}

export async function getFilmDetailsById(filmId) {
  const { data } = await axios(`/movie/${filmId}`, options);

  return data;
}
