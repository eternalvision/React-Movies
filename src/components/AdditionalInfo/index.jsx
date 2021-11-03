import { Component, Suspense, lazy } from 'react';
import { NavLink, Switch, Route, withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import routes from '../../routes';
import '../../App.css'

const Cast = lazy(() => import('../Cast'));
const Reviews = lazy(() => import('../Reviews'));


class AdditionalInfo extends Component {
  render() {
    const { match, location } = this.props;

    return (
      <>
        <div>
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: `${match.url}/cast`,
                  state: { ...location.state },
                }}
                className="nav-link"
                activeClassName="active"
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${match.url}/reviews`,
                  state: { ...location.state },
                }}
                className="nav-link"
                activeClassName="active"
              >
                Reviews
              </NavLink>
            </li>
          </ul>

          <Suspense
            fallback={
              <div className="Loader">
                <Loader type="Rings" color="#00BFFF" height={200} width={200} />
              </div>
            }
          >
            <Switch>
              <Route path={routes.cast} component={Cast} />
              <Route path={routes.reviews} component={Reviews} />
            </Switch>
          </Suspense>
        </div>
      </>
    );
  }
}

export default withRouter(AdditionalInfo);
