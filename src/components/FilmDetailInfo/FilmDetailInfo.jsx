import PropTypes from 'prop-types';
import {
  DescriptionContainer,
  DescriptionList,
  DetailInfoContainer,
} from './FilmDetailInfo.styles';

const noImage =
  'https://smanegeri1cilograng.sch.id/media_library/images/b4fab803413b3553377d57d415c33c30.png';

function FilmDetailInfo({ filmDetails }) {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/';
  return (
    filmDetails && (
      <DetailInfoContainer>
        <img
          src={
            filmDetails.poster_path
              ? imageBaseUrl + 'w300' + filmDetails.poster_path
              : noImage
          }
          alt=""
          width="300px"
          height="450px"
        />
        <DescriptionContainer>
          <h2>{`${filmDetails.title}(${filmDetails.release_date.slice(
            0,
            4
          )})`}</h2>
          <p>{`User Score ${(filmDetails.vote_average * 10).toFixed(2)}%`}</p>
          <DescriptionList>
            <li>
              <h3>Overview</h3>
              <p>{filmDetails.overview}</p>
            </li>
            <li>
              <h3>Genres</h3>
              <p>{filmDetails.genres.map(genre => genre.name).join(', ')}</p>
            </li>
          </DescriptionList>
        </DescriptionContainer>
      </DetailInfoContainer>
    )
  );
}

export default FilmDetailInfo;

FilmDetailInfo.propTypes = {
  filmDetails: PropTypes.object,
};
