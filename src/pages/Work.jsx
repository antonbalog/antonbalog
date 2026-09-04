import React from 'react';

import workStyles from './Work.module.scss';

const Work = () => {
  return (
    <div className={workStyles.work}>
      {/* <div className={workStyles.designer}>
          <h1>UX/UI Designer</h1>
          <p>Because I like to make COOL stuff!</p>
        </div>
        <div className={workStyles.developer}>
          <h1>React JS Developer</h1>
          <p>Because React is cool stuff!</p>
        </div> */}
      <div className={workStyles.engineer}>
        <p>WHAT I DO?</p>
        <h1>DEVOPS Consultant</h1>
        <p>DevOps consultant with 13+ years of experience across banking and fintech,
          telecommunications, and health insurance. Specialised in Kubernetes
          platform, CI/CD modernisation, infrastructure as code, and DevSecOps.
          Combines hands-on engineering with technical leadership and
          developer enablement in complex, regulated enterprise environments.</p>
      </div>
    </div>
  );
}

export default Work;
