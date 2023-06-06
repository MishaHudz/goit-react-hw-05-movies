import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmRevirws } from 'services/movies-api';
import { NotFoundText, RevirwsItem, RevirwsList } from './Reviews.styles';

function Reviews() {
  const [filmRevirws, setFilmRevirws] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      const { results } = await getFilmRevirws(movieId);
      if (results.length === 0) {
        setFilmRevirws(null);
        return;
      }
      setFilmRevirws(results);
    };

    getCast();
  }, [movieId]);

  return filmRevirws ? (
    <RevirwsList>
      {filmRevirws.map(filmRevirw => (
        <RevirwsItem key={filmRevirw.id}>
          <h3>{`Author: ${filmRevirw.author}`}</h3>
          <p>{filmRevirw.content}</p>
        </RevirwsItem>
      ))}
    </RevirwsList>
  ) : (
    <NotFoundText>We don't have any reviews for this movie!</NotFoundText>
  );
}

export default Reviews;
