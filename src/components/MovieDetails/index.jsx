import PropTypes from 'prop-types';

const MovieDetails = ({
  poster_path,
  vote_average,
  genres,
  title,
  overview
}) => {  
  const raiting = vote_average * 10 + '%';
  const genresName = genres.map(genre => genre.name).join(', ');  
  const baseURL = 'https://image.tmdb.org/t/p/w300';
  const imgURL = baseURL + poster_path;

    return (
      <>
        <img src={imgURL} alt={title} />
        <h1>{title}</h1>
        <p>Raiting: {raiting}</p>
        <h3>Overview:</h3>
        <span>{overview}</span>
        <h3>Genres:</h3>
        <span>{genresName}</span>
      </>
    );
};

MovieDetails.propTypes = {
  poster_path: PropTypes.string,
  vote_average: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string.isRequired }),
  ).isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieDetails;
