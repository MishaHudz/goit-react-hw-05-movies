import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

function MoviesList({ moviesListArr, moviesPage }) {
  const location = useLocation();
  return (
    <ul>
      {moviesListArr.map(({ id, original_title }) => {
        return (
          <li key={id}>
            <Link
              to={`${moviesPage ? `${id}` : `movies/${id}`}`}
              state={location}
            >
              {original_title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MoviesList;
MoviesList.propTypes = {
  moviesListArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  moviesPage: PropTypes.bool,
};
