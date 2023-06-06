import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmCast } from 'services/movies-api';
import { CastItem, CastList } from './Cast.styles';

const imageBaseUrl = 'https://image.tmdb.org/t/p/';
const noImage =
  'https://smanegeri1cilograng.sch.id/media_library/images/b4fab803413b3553377d57d415c33c30.png';

function Cast() {
  const [filmCast, setFilmCast] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      const { cast } = await getFilmCast(movieId);

      setFilmCast(cast);
    };

    getCast();
  }, [movieId]);

  return (
    filmCast && (
      <CastList>
        {filmCast.map(actor => (
          <CastItem key={actor.cast_id}>
            <img
              src={
                actor.profile_path
                  ? imageBaseUrl + 'w200' + actor.profile_path
                  : noImage
              }
              alt={actor.original_name}
              width="100px"
              height="150px"
            />

            <div>
              <h3>{actor.original_name}</h3>
              <p>{`Character: ${actor.character}`}</p>
            </div>
          </CastItem>
        ))}
      </CastList>
    )
  );
}

export default Cast;
