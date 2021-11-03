import { Component } from 'react';
import PropTypes from 'prop-types';
import apiServices from '../../api'; 
import CastItem from './CastItem';
import Loader from 'react-loader-spinner';
import '../../App.css';

class Cast extends Component {
    state = {
        casts: [],
        error: null,      
    };

    componentDidMount() {
        const { movieId } = this.props.match.params;
        apiServices
            .fetchCast(movieId)
            .then(cast => this.setState({ casts: cast }))
            .catch(error => this.setState(error))
          
    }
    render() {
        const { casts, error, isLoading } = this.state;

        return (
            <>
                <ul className="cast-gallery">
                {isLoading ? (
                    <div className="Loader">
                        <Loader type="Rings" color="#00BFFF" height={200} width={200} />
                    </div>
                ) : casts.length > 0 ? (
                    casts.map(({ name, profile_path, cast_id, character }) => {
                        return (
                            <CastItem
                                key={cast_id}
                                name={name}
                                path={profile_path}
                                character={character}
                            />
                        );
                    })
                ) : (
                            <span>No cast</span>
                            )}
                    </ul>
                    {error && <h3 className="ErrorMessage">{error.message}</h3>}
                    
            </>
        );
    }
}  

Cast.propTypes = {
    movieId: PropTypes.string,
};

export default Cast;