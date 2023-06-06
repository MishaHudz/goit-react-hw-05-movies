function FilmDetailInfo({ filmDetails }) {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/';
  return (
    filmDetails && (
      <div>
        <img src={imageBaseUrl + 'w200' + filmDetails.poster_path} alt="" />
        <div>
          <h2>{filmDetails.title}</h2>
          <p>{`User Score ${(filmDetails.vote_average * 10).toFixed(2)}%`}</p>
          <ul>
            <li>
              <h3>Overview</h3>
              <p>{filmDetails.overview}</p>
            </li>
            <li>
              <h3>Genres</h3>
              <p>{filmDetails.genres.map(genre => genre.name).join(', ')}</p>
            </li>
          </ul>
        </div>
      </div>
    )
  );
}

export default FilmDetailInfo;
