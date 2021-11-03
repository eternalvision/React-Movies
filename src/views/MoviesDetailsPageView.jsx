import { Component } from 'react';
import apiServices from '../api';
import GoBackButton from '../components/GoBackButton';
import AdditionalInfo from '../components/AdditionalInfo';
import MovieDetails from '../components/MovieDetails';
import '../App.css';

class MovieDetailsPage extends Component {
  state = {
    poster_path: '',
    release_date: '',
    first_air_date: '',
    title: '',
    original_name: '',
    vote_average: 0,
    overview: '',
    genres: [],
    id: 0,
    error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    apiServices
      .fetchMovieDetails(movieId)
      .then(movieDetails => this.setState({ ...movieDetails }))
      .catch(error => this.setState(error));
  }

  render() {
    const { error } = this.state;
    return (
      <>
        <section className="film-info">
          <GoBackButton />
          <div>
            <h2>Movie Details</h2>
            <MovieDetails {...this.state} />
          </div>
          <AdditionalInfo />
          {error && <h3 className="ErrorMessage">{error.message}</h3>}
        </section>
      </>
    );
  }
}

export default MovieDetailsPage;
