import { Link, withRouter } from 'react-router-dom';
import MoviePreview from '../MoviePreview';
import '../../App.css';

const MoviesItem = ({ movies, location }) => {
  return (   
      <ul className="list">
        {movies.map(({ id, title, poster_path }) => (
          <li className="item" key={id}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: {
                  from: location,
                },
              }}
            >
              <MoviePreview poster_path={poster_path} title={title} />
            </Link>
          </li>
        ))}
      </ul>
  
  );
};

export default withRouter(MoviesItem);
