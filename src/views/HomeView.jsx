import { Component } from 'react';
import { Link } from 'react-router-dom';
import apiServices from '../api';

class HomeView extends Component {
  state = {
    error: null,
    movies: [],
  
  };

  componentDidMount() {
     apiServices
      .fetchTrendMovies()
      .then(trendMovies => this.setState({ movies: trendMovies }))
      .catch(error => this.setState(error))
  }

  render() {
    const { movies } = this.state;
    return ( 
      <ul>
        <h2>Trend movies</h2>
        {movies.map(movie => (
          <Link to={`movies/${movie.id}`} key={movie.id}>
            <li>{movie.title}</li>
          </Link>
        ))}
      </ul>
    );
  }
}

export default HomeView;
