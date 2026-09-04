import workStyles from './Work.module.scss';

const Work = () => {
  return (
    <main className={workStyles.work}>
      <section
        className={workStyles.engineer}
        aria-labelledby="work-title"
      >
        <p className={workStyles.eyebrow}>WHAT I DO</p>

        <h1 id="work-title">DEVOPS CONSULTANT</h1>

        <p className={workStyles.description}>
          I’m a DevOps consultant with 13+ years of experience across banking
          and fintech, telecommunications, and health insurance. I specialise
          in Kubernetes platforms, CI/CD modernisation, infrastructure as code,
          and DevSecOps—combining hands-on engineering with technical leadership
          and developer enablement in complex, regulated environments.
        </p>
      </section>
    </main>
  );
};

export default Work;