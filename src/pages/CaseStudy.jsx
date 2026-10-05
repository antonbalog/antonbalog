import { Link, useParams } from 'react-router-dom';

import { getCaseStudy } from '../content/caseStudies';
import NotFound from './NotFound';
import caseStyles from './CaseStudies.module.scss';

const Section = ({ title, paragraphs }) => (
  <section className={caseStyles.detailSection}>
    <h2 className={caseStyles.detailHeading}>{title}</h2>
    {paragraphs.map((text) => (
      <p key={text} className={caseStyles.detailText}>
        {text}
      </p>
    ))}
  </section>
);

const CaseStudy = () => {
  const { slug } = useParams();
  const study = getCaseStudy(slug);

  if (!study) {
    return <NotFound />;
  }

  return (
    <main className={caseStyles.page}>
      <Link to="/case-studies" className={caseStyles.back}>
        ← All case studies
      </Link>

      <header className={caseStyles.header}>
        <h1 className={caseStyles.detailTitle}>{study.title}</h1>
        <p className={caseStyles.meta}>
          <span>{study.industry}</span>
          {study.status && <span>{study.status}</span>}
        </p>
      </header>

      <div className={caseStyles.columns}>
        <div className={caseStyles.content}>
          <p className={caseStyles.summary}>{study.summary}</p>
          <Section title="Context" paragraphs={study.context} />
          <Section title="What I did" paragraphs={study.whatIDid} />
          <Section title="What changed" paragraphs={study.whatChanged} />

          <p className={caseStyles.cta}>
            <Link to="/contact" className={caseStyles.ctaLink}>
              Working on something similar?
            </Link>
          </p>
        </div>

        <aside className={caseStyles.panel} aria-hidden="true">
          <span className={caseStyles.panelLabel}>{study.industry}</span>
        </aside>
      </div>
    </main>
  );
};

export default CaseStudy;
