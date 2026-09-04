import { Link } from 'react-router-dom';

import notFoundStyles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <main className={notFoundStyles.notFound}>
      <h1>404</h1>
      <p>This page doesn't exist.</p>
      <Link to="/" className={notFoundStyles.link}>
        Back home
      </Link>
    </main>
  );
};

export default NotFound;
