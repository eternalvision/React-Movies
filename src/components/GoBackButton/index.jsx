import { withRouter } from 'react-router-dom';
import routes from '../../routes';
import PropTypes from 'prop-types';

const GoBackButton = ({ history, location }) => {
  const handleGoBack = () => {
    history.push(location?.state?.from || routes.home);
  };
  return (
    <button type="button" onClick={handleGoBack}>
      X
    </button>
  );
};

GoBackButton.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
export default withRouter(GoBackButton);
