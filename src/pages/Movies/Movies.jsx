import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getFilmsBySearch } from 'services/movies-api';

function MoviesPage() {
  const [request, setRequest] = useSearchParams();
  const [filmList, setFilmList] = useState(null);
  const filmName = useMemo(() => request.get('search'), [request]);

  const onFormSubmit = evt => {
    evt.preventDefault();
    if (!request.get('search')) return toast.warn('Enter name of the film!');
    getFilmsList();
  };

  useEffect(() => {
    if (!filmName) return;

    const fetchFilms = async () => {
      const { results } = await getFilmsBySearch(filmName);
      setFilmList(results);
      if (results.length === 0) toast.error('Not found');
    };
    fetchFilms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getFilmsList = async () => {
    const { results } = await getFilmsBySearch(request.get('search'));
    setFilmList(results);
    if (results.length === 0) toast.error('Not found');
  };

  const updateQueryString = evt => {
    const filmRequest =
      evt.target.value !== '' ? { search: evt.target.value } : {};
    setRequest(filmRequest);
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          onChange={updateQueryString}
          value={request.get('search') ?? ''}
        />
        <button>Search</button>
      </form>
      {filmList && <MoviesList moviesListArr={filmList} moviesPage={true} />}
    </>
  );
}

export default MoviesPage;
