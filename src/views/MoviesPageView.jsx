import { Component } from 'react';
import SearchBar from '../components/SearchBar';
import apiServices from '../api';
import MoviesItem from '../components/MoviesItem';
import Loader from 'react-loader-spinner';
import '../App.css';

class MoviesPageView extends Component {
  state = {
    movies: [],
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.handleChangeQuery();
    }
  }
  handleChangeQuery = query => {
    apiServices
      .fetchMovies(query)
      .then(results => this.setState({ movies: results }))
      .catch(error => this.setState(error));
  };

  render() {
    const { movies, error, isLoading } = this.state;
    return (
      <>
        {error && <h3 className="ErrorMessage">{error.message}</h3>}
        <SearchBar onSubmit={this.handleChangeQuery} />
        {isLoading && (
          <div className="Loader">
            <Loader type="Rings" color="#000" height={200} width={200} />
          </div>
        )}
        {movies.length > 0 && <MoviesItem {...this.props} movies={movies} />}
      </>
    );
  }
}

export default MoviesPageView;
