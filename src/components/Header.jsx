import { NavLink } from 'react-router-dom';

import Hamburger from './Hamburger';
import headerStyles from './Header.module.scss';

const Header = ({
  active,
  activationHandler,
  hoverHandler,
  labelHandler,
}) => {
  const navItemClass = ({ isActive }) =>
    `${headerStyles.navItem} ${isActive ? headerStyles.active : ''}`.trim();

  const resetLabel = () => hoverHandler(':)');

  return (
    <header className={active ? headerStyles.dark : headerStyles.default}>
      <nav className={active ? headerStyles.moveDown : headerStyles.moveUp}>
        <ul className={headerStyles.navList}>
          <li
            onMouseEnter={() => hoverHandler('HOME')}
            onMouseLeave={resetLabel}
          >
            <NavLink
              to="/"
              end
              className={navItemClass}
              onClick={activationHandler}
            >
              HOME
            </NavLink>
          </li>

          <li
            onMouseEnter={() => hoverHandler('SELECTED WORK')}
            onMouseLeave={resetLabel}
          >
            <NavLink
              to="/work"
              className={navItemClass}
              onClick={activationHandler}
            >
              WORK
            </NavLink>
          </li>

          <li
            onMouseEnter={() => hoverHandler('LET’S TALK')}
            onMouseLeave={resetLabel}
          >
            <NavLink
              to="/contact"
              className={navItemClass}
              onClick={activationHandler}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>

      <Hamburger clickHandler={activationHandler}>
        {labelHandler}
      </Hamburger>
    </header>
  );
};

export default Header;