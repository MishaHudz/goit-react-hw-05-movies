import { Link } from 'react-router-dom';

function MoviesList({ moviesListArr }) {
  return (
    <ul>
      {moviesListArr.map(({ id, original_title }) => {
        return (
          <li key={id}>
            <Link to={`movies/${id}`}>{original_title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MoviesList;
