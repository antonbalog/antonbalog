import sideDrawerStyles from './SideDrawer.module.scss';

const SideDrawer = ({ active, children }) => {
  return (
    <div className={active ? sideDrawerStyles.openSideDrawer : sideDrawerStyles.closedSideDrawer}>
        <h1>{children}</h1>
    </div>
  );
}

export default SideDrawer;
