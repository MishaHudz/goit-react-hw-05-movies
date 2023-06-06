import FilmDetailInfo from 'components/FilmDetailInfo/FilmDetailInfo';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getFilmDetailsById } from 'services/movies-api';

function MovieDetailsPage() {
  const [filmDetails, setFilmDetails] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    if (filmDetails) return;

    const getFilmDetails = async () => {
      const responce = await getFilmDetailsById(movieId);
      setFilmDetails(responce);
    };

    getFilmDetails();
  });

  return (
    <>
      <FilmDetailInfo filmDetails={filmDetails} />
      <ul>
        <li>
          <NavLink to={'cast'}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={'reviews'}>Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default MovieDetailsPage;
