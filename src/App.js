import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Loader from 'react-loader-spinner';
import routes from './routes';
import './App.css';

const HomePage = lazy(() => import('./views/HomeView'));
const MoviesPage = lazy(() => import('./views/MoviesPageView'));
const MoviesDetailsPage = lazy(() => import('./views/MoviesDetailsPageView'));
const NotFound = lazy(() => import('./views/NotFoundView'));

const App = () => {
  return (
    <>
      <Navigation />

      <Suspense
        fallback={
          <div className="Loader">
            <Loader type="Rings" color="#000" height={200} width={200} />
          </div>
        }
      >
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.moviesDetails} component={MoviesDetailsPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
