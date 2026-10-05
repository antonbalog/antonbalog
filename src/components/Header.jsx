import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { site } from '../content/site';
import headerStyles from './Header.module.scss';

const navigationItems = [
  { label: 'Services', path: '/services' },
  { label: 'Case studies', path: '/case-studies' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.bar}>
        <Link to="/" className={headerStyles.brand} onClick={closeMenu}>
          {site.name}
        </Link>

        <button
          type="button"
          className={headerStyles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <nav
        id="site-navigation"
        aria-label="Main navigation"
        className={
          menuOpen
            ? `${headerStyles.nav} ${headerStyles.navOpen}`
            : headerStyles.nav
        }
      >
        <ul className={headerStyles.navList}>
          {navigationItems.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? `${headerStyles.link} ${headerStyles.active}`
                    : headerStyles.link
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
