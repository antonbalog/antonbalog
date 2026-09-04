import React from 'react';

import workStyles from './Work.module.scss';

const Work = () => {
  return (
    <div className={workStyles.work}>
      <div className={workStyles.engineer}>
        <p>WHAT I DO</p>
        <h1>DEVOPS Consultant</h1>
        <p>I’m a DevOps consultant with 13+ years of experience across banking and fintech, telecommunications,
          and health insurance. I specialise in Kubernetes platforms, CI/CD modernisation, infrastructure as code,
          and DevSecOps—combining hands-on engineering with technical leadership and developer enablement
          in complex, regulated environments.</p>
      </div>
    </div>
  );
}

export default Work;
