import StackedList from '../components/StackedList';
import { caseStudies } from '../content/caseStudies';
import caseStyles from './CaseStudies.module.scss';

const listItems = caseStudies.map((study) => ({
  id: study.slug,
  title: study.title,
  summary: study.summary,
  label: study.industry,
  to: `/case-studies/${study.slug}`,
}));

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

      <StackedList items={listItems} ariaLabel="Case studies" />
    </main>
  );
};

export default CaseStudies;
