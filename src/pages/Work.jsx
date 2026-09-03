import React from 'react';

import workStyles from './Work.module.scss';

const Work = () => {
  return (
      <div className={workStyles.work}>
        <div className={workStyles.designer}>
          <h1>UX/UI Designer</h1>
          <p>Because I like to make COOL stuff!</p>
        </div>
        <div className={workStyles.developer}>
          <h1>React JS Developer</h1>
          <p>Because React is cool stuff!</p>
        </div>
        <div className={workStyles.engineer}>
          <h1>DEVOPS Engineer</h1>
          <p>To save time for the COOL stuff!</p>
        </div>
      </div>
  );
}

export default Work;
