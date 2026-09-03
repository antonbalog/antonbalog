import React from 'react';

import homeStyles from './Home.module.scss';

const Home = () => {
  return (
    <div className={homeStyles.home}>
      <div>
        <p style={{ 'textAlign': 'left' }}>
          I’m Anton, a software engineer building reliable applications and the systems that keep them running.
        </p>
        <p style={{ 'textAlign': 'center' }}>
          Want to talk? Get in touch.
        </p>
      </div>
    </div>
  );
}

export default Home;
