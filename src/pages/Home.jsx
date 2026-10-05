import { Link } from 'react-router-dom';

import { services } from '../content/services';
import { caseStudies } from '../content/caseStudies';
import homeStyles from './Home.module.scss';

const featuredCaseStudy = caseStudies[0];

const Home = () => {
  return (
    <main>
      <section className={homeStyles.hero}>
        <h1 className={homeStyles.headline}>
          I make software delivery faster, safer, and less fragile.
        </h1>
        <p className={homeStyles.lead}>
          Independent DevOps consultant with 13+ years across banking, fintech,
          telecommunications, and health insurance.
        </p>
        <div className={homeStyles.actions}>
          <Link to="/services" className={homeStyles.primary}>
            See my services
          </Link>
          <Link to="/contact" className={homeStyles.secondary}>
            Get in touch
          </Link>
        </div>
      </section>

      <section className={homeStyles.section} aria-labelledby="home-services">
        <h2 id="home-services" className={homeStyles.sectionTitle}>
          What I do
        </h2>
        <ol className={homeStyles.serviceList}>
          {services.map((service, index) => (
            <li key={service.id} className={homeStyles.serviceItem}>
              <span className={homeStyles.index}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <Link to="/services" className={homeStyles.serviceLink}>
                {service.title}
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className={homeStyles.section} aria-labelledby="home-case">
        <h2 id="home-case" className={homeStyles.sectionTitle}>
          Recent work
        </h2>
        <Link
          to={`/case-studies/${featuredCaseStudy.slug}`}
          className={homeStyles.caseCard}
        >
          <span className={homeStyles.caseIndustry}>
            {featuredCaseStudy.industry}
          </span>
          <span className={homeStyles.caseTitle}>
            {featuredCaseStudy.title}
          </span>
          <span className={homeStyles.caseSummary}>
            {featuredCaseStudy.summary}
          </span>
        </Link>
      </section>
    </main>
  );
};

export default Home;
