import React from 'react';

import hamburgerStyles from './Hamburger.module.scss';

const Hamburger = (props) => {
  return (
    <div className={hamburgerStyles.hamburger}>
      <button onClick={props.clickHandler}>
        <div className={hamburgerStyles.toggle}>
            <div className={props.children === 'MENU' ? hamburgerStyles.line : hamburgerStyles.first}/>
            <div className={props.children === 'MENU' ? hamburgerStyles.line : hamburgerStyles.second}/>
            <div className={props.children === 'MENU' ? hamburgerStyles.line : hamburgerStyles.third}/>
        </div>
          {props.children}
      </button>
    </div>
  );
}

export default Hamburger;
