import { toast } from 'react-toastify';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilmsBySearch } from 'services/movies-api';

function MoviesPage() {
  const [request, setRequest] = useSearchParams();
  const [filmList, setFilmList] = useState(null);
  const [inputState, setinputState] = useState('');
  const [eror, setEror] = useState(null);

  const filmName = useMemo(() => request.get('search'), [request]);

  useEffect(() => {
    if (!filmName) return;
    const fetchFilms = async () => {
      try {
        const { results } = await getFilmsBySearch(filmName);
        setFilmList(results);
        setinputState('');
        setEror(null);
        if (results.length === 0) {
          throw new Error('Not Found');
        }
      } catch (error) {
        setEror(error.message);
      }
    };
    fetchFilms();
  }, [filmName]);

  useEffect(() => {
    eror && toast.error(eror);
  }, [eror]);

  const onFormSubmit = evt => {
    evt.preventDefault();

    if (!inputState) return toast.warn('Enter name of the film!');

    const filmRequest = inputState !== '' ? { search: inputState } : {};
    setRequest(filmRequest);
  };

  const updateQueryString = evt => {
    setinputState(evt.target.value);
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input type="text" onChange={updateQueryString} value={inputState} />
        <button>Search</button>
      </form>
      {filmList && <MoviesList moviesListArr={filmList} moviesPage={true} />}
    </>
  );
}

export default MoviesPage;
