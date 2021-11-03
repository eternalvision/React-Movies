import{ Component } from 'react';
import PropTypes from 'prop-types';
import apiServices from '../../api'; 
import Loader from 'react-loader-spinner';
import ReviewsItem from './ReviewsItem';

class Reviews extends Component {
  state = {
    reviews: [],
    error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    apiServices
      .fetchReviews(movieId)
      .then(results => this.setState({ reviews: results }))
      .catch(error => this.setState(error))
      
  }
  render() {
    const { reviews, error, isLoading } = this.state;

    return (
      <>       
        <ul>
          {isLoading ? (
          <div className="Loader">
          <Loader type="Rings" color="#00BFFF" height={200} width={200} />
          </div>
          ) : reviews.length > 0 ? (
            reviews.map(({ id, author, content }) => (
              <ReviewsItem key={id} author={author} content={content} />
            ))
          ) : (
          <span>No reviews</span>
          )}
               
        </ul>
          {error && <h3 className="ErrorMessage">{error.message}</h3>}
      </>
    );
  }
}

Reviews.propTypes = {
    movieId: PropTypes.string,
};

export default Reviews;


