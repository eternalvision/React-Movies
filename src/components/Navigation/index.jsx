import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import '../../App.css';

const Navigation = () => {
  return (
    <nav className="menu">
      <div className="nav-top">
        <NavLink
          exact
          to={routes.home}
          className="nav-link"
          activeClassName="active"
        >
          Главная
        </NavLink>
        <NavLink
          to={routes.movies}
          className="nav-link"
          activeClassName="active"
        >
          Фильмы
        </NavLink>
      </div>
    </nav>
  );
};
export default Navigation;
