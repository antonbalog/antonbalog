import React from 'react';

import homeStyles from './Home.module.scss';

const Home = () => {
  return (
    <div className={homeStyles.home}>
      <div>
        <p style={{'textAlign': 'left'}}>
          Launched in 2019 as an it freelancer for creative entrepreneurs,
          bloggers, and small biz rockstars from all around the world.
        </p>
        <p style={{'textAlign': 'center'}}>
          Don't hesitate to say hello!
        </p>
      </div>
    </div>
  );
}

export default Home;
