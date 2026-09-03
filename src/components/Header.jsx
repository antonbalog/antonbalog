import { NavLink } from 'react-router-dom';

import Hamburger from './Hamburger';
import headerStyles from './Header.module.scss';

const navigationItems = [
  {
    label: 'HOME',
    message: 'BACK HOME',
    path: '/',
    end: true,
  },
  {
    label: 'WORK',
    message: 'SELECTED WORK',
    path: '/work',
  },
  {
    label: 'CONTACT',
    message: 'GET IN TOUCH',
    path: '/contact',
  },
];

const Header = ({
  active,
  activationHandler,
  hoverHandler,
  labelHandler,
}) => {
  const navItemClass = ({ isActive }) =>
    isActive
      ? `${headerStyles.navItem} ${headerStyles.active}`
      : headerStyles.navItem;

  const resetMessage = () => {
    hoverHandler(':)');
  };

  return (
    <header className={active ? headerStyles.dark : headerStyles.default}>
      <nav
        className={active ? headerStyles.moveDown : headerStyles.moveUp}
        aria-label="Main navigation"
      >
        <ul className={headerStyles.navList}>
          {navigationItems.map(({ label, message, path, end }) => (
            <li
              key={path}
              onMouseEnter={() => hoverHandler(message)}
              onMouseLeave={resetMessage}
              onFocus={() => hoverHandler(message)}
              onBlur={resetMessage}
            >
              <NavLink
                to={path}
                end={end}
                className={navItemClass}
                onClick={activationHandler}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <Hamburger clickHandler={activationHandler}>
        {labelHandler}
      </Hamburger>
    </header>
  );
};

export default Header;  