import PropTypes from 'prop-types';
import '../../App.css';


const CastItem = ({ name, path, character }) => {
    const baseURL = 'https://image.tmdb.org/t/p/w300';
    const imgURL = baseURL + path;

    return (
        <li className="cast-gallery__item">
            <img src={imgURL} alt={name} className="cast-gallery__img" width="150" />
            <h3>{name}</h3>
            <p>Character: {character}</p>
        </li>
    );
};

CastItem.propTypes = {
    path: PropTypes.string,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
};
export default CastItem;