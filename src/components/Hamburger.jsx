import hamburgerStyles from './Hamburger.module.scss';

const Hamburger = ({ clickHandler, children }) => {
  return (
    <div className={hamburgerStyles.hamburger}>
      <button onClick={clickHandler}>
        <div className={hamburgerStyles.toggle}>
            <div className={children === 'MENU' ? hamburgerStyles.line : hamburgerStyles.first}/>
            <div className={children === 'MENU' ? hamburgerStyles.line : hamburgerStyles.second}/>
            <div className={children === 'MENU' ? hamburgerStyles.line : hamburgerStyles.third}/>
        </div>
          {children}
      </button>
    </div>
  );
}

export default Hamburger;
