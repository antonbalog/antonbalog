import React from 'react';

import homeStyles from './Home.module.scss';

const Home = () => {
  return (
    <div className={homeStyles.home}>
      <div>
        <p style={{'textAlign': 'left'}}>
          My name is Anton Balog and I am IT Freelancer based in Bratislava.<br />
          Need help? Contact Me!
        </p>
        <p style={{'textAlign': 'center'}}>
          Cheers!
        </p>
      </div>
    </div>
  );
}

export default Home;
