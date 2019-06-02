import React from 'react';

import sideDrawerStyles from './SideDrawer.module.scss';

const SideDrawer = (props) => {
  return (
    <div className={props.active ? sideDrawerStyles.openSideDrawer : sideDrawerStyles.closedSideDrawer}>
        <h1>{props.children}</h1>
    </div>  
  );
}

export default SideDrawer;
