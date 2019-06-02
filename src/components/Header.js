import React from 'react';
import { NavLink } from 'react-router-dom';

import Hamburger from './Hamburger';

import headerStyles from './Header.module.scss';

const Header = (props) => {
  return (
    <header className={!props.active ? headerStyles.default : headerStyles.dark}>
      <nav className={!props.active ? headerStyles.moveUp : headerStyles.moveDown}>
        <ul className={headerStyles.navList}>
          <li onMouseEnter={props.hoverHandler.bind(this, 'WANNA GO BACK 2 HOME PAGE?')} onMouseLeave={props.hoverHandler.bind(this, ':)')}>
            <NavLink onClick={props.activationHandler} exact className={headerStyles.navItem} activeClassName={headerStyles.active} to='/'>HOME</NavLink>
          </li>
          {/* <li onMouseEnter={props.hoverHandler.bind(this, 'SOME IDEAS')} onMouseLeave={props.hoverHandler.bind(this, ':)')}>
            <NavLink onClick={props.activationHandler} className={headerStyles.navItem} activeClassName={headerStyles.active} to='/blog'>BLOG</NavLink>
          </li> */}
          <li onMouseEnter={props.hoverHandler.bind(this, 'WHAT CAN I DO FOR YOU?')} onMouseLeave={props.hoverHandler.bind(this, ':)')}>
            <NavLink onClick={props.activationHandler} className={headerStyles.navItem} activeClassName={headerStyles.active} to='/work'>WORK</NavLink>
          </li>
          <li onMouseEnter={props.hoverHandler.bind(this, `CONTACT ME IF YOU LIKE!`)} onMouseLeave={props.hoverHandler.bind(this, ':)')}>
            <NavLink onClick={props.activationHandler} className={headerStyles.navItem} activeClassName={headerStyles.active} to='/contact'>CONTACT</NavLink>
          </li>
        </ul>
      </nav>
      <Hamburger clickHandler={props.activationHandler}>{props.labelHandler}</Hamburger>
    </header>
  );
}   

export default Header;
