import { Link } from 'react-router-dom';

import { caseStudies } from '../content/caseStudies';
import caseStyles from './CaseStudies.module.scss';

const CaseStudies = () => {
  return (
    <main className={caseStyles.page}>
      <header className={caseStyles.intro}>
        <p className={caseStyles.eyebrow}>Case studies</p>
        <h1 className={caseStyles.title}>Work I can talk about</h1>
        <p className={caseStyles.lead}>
          Anonymized summaries of real engagements. Clients are described by
          industry only.
        </p>
      </header>

      <ul className={caseStyles.list}>
        {caseStudies.map((study) => (
          <li key={study.slug} className={caseStyles.listItem}>
            <Link
              to={`/case-studies/${study.slug}`}
              className={caseStyles.listLink}
            >
              <span className={caseStyles.industry}>{study.industry}</span>
              <span className={caseStyles.listTitle}>{study.title}</span>
              <span className={caseStyles.listSummary}>{study.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default CaseStudies;
