import { Link } from 'react-router-dom';

import StackedList from '../components/StackedList';
import { services } from '../content/services';
import { caseStudies } from '../content/caseStudies';
import homeStyles from './Home.module.scss';

const featuredCaseStudy = caseStudies[0];

const serviceItems = services.map((service) => ({
  id: service.id,
  title: service.title,
  summary: service.summary,
  to: '/services',
}));

const Home = () => {
  return (
    <main className={homeStyles.page}>
      <section className={homeStyles.intro}>
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

      <section aria-labelledby="home-services" className={homeStyles.section}>
        <h2 id="home-services" className={homeStyles.sectionLabel}>
          What I do
        </h2>
        <StackedList items={serviceItems} ariaLabel="Services" />
      </section>

      <section aria-labelledby="home-case" className={homeStyles.section}>
        <h2 id="home-case" className={homeStyles.sectionLabel}>
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
