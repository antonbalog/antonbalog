import React from 'react';

import homeStyles from './Home.module.scss';

const Home = () => {
  return (
    <div className={homeStyles.home}>
      <div>
        <p style={{ 'textAlign': 'center' }}>
          I’m Anton, an IT consultant building reliable applications and the systems that keep them running.*
        </p>
        <p style={{ 'textAlign': 'right' }}>
          *Most of the time.
        </p>
      </div>
    </div>
  );
}

export default Home;
