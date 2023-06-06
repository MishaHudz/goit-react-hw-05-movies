import FilmDetailInfo from 'components/FilmDetailInfo/FilmDetailInfo';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getFilmDetailsById } from 'services/movies-api';
import {
  AdditionalInfoContainer,
  AdditionalInfoLink,
  AdditionalInfoLinksList,
  GoBackButton,
} from './MovieDetails.styles';

function MovieDetailsPage() {
  const [filmDetails, setFilmDetails] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (filmDetails) return;

    const getFilmDetails = async () => {
      const responce = await getFilmDetailsById(movieId);
      setFilmDetails(responce);
    };

    getFilmDetails();
  });

  const onGoBackButtonClick = () => {
    navigate(location.state);
  };

  return (
    <>
      <GoBackButton onClick={onGoBackButtonClick}> &#x2190; </GoBackButton>
      <FilmDetailInfo filmDetails={filmDetails} />
      <AdditionalInfoContainer>
        <p>Additional information</p>
        <AdditionalInfoLinksList>
          <li>
            <AdditionalInfoLink to={'cast'} state={location.state}>
              Cast
            </AdditionalInfoLink>
          </li>
          <li>
            <AdditionalInfoLink to={'reviews'} state={location.state}>
              Reviews
            </AdditionalInfoLink>
          </li>
        </AdditionalInfoLinksList>
      </AdditionalInfoContainer>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetailsPage;
