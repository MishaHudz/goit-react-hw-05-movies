import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getMostPopularFilms } from 'services/movies-api';

function HomePage() {
  const [popularFilms, setpopularFilms] = useState(null);

  useEffect(() => {
    if (popularFilms) return;

    const getPopularMovies = async () => {
      const { results } = await getMostPopularFilms();
      setpopularFilms(results);
    };

    getPopularMovies();
  }, [popularFilms]);

  return (
    <>
      <h2>Trending today</h2>
      {popularFilms && <MoviesList moviesListArr={popularFilms} />}
    </>
  );
}

export default HomePage;
