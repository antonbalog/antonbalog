import { resume } from '../content/resume';
import { site } from '../content/site';
import resumeStyles from './Resume.module.scss';

const Resume = () => {
  return (
    <main className={resumeStyles.page}>
      <header className={resumeStyles.intro}>
        <p className={resumeStyles.eyebrow}>Resume</p>
        <h1 className={resumeStyles.title}>Anton Balog</h1>
        <p className={resumeStyles.lead}>{resume.profile}</p>
        <a
          href={site.cvPath}
          download="Anton-Balog-CV.pdf"
          className={resumeStyles.download}
        >
          Download CV (PDF)
        </a>
      </header>

      <section className={resumeStyles.section} aria-labelledby="resume-experience">
        <h2 id="resume-experience" className={resumeStyles.heading}>
          Experience
        </h2>
        {resume.experience.map((job) => (
          <article key={job.employer} className={resumeStyles.job}>
            <div className={resumeStyles.jobHeader}>
              <h3 className={resumeStyles.jobRole}>{job.role}</h3>
              <p className={resumeStyles.jobMeta}>
                {job.employer} · {job.period}
              </p>
            </div>
            {job.note && <p className={resumeStyles.note}>{job.note}</p>}
            <ul className={resumeStyles.highlights}>
              {job.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className={resumeStyles.section} aria-labelledby="resume-skills">
        <h2 id="resume-skills" className={resumeStyles.heading}>
          Skills
        </h2>
        <dl className={resumeStyles.skills}>
          {resume.skills.map((group) => (
            <div key={group.area} className={resumeStyles.skillRow}>
              <dt className={resumeStyles.skillArea}>{group.area}</dt>
              <dd className={resumeStyles.skillItems}>{group.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className={resumeStyles.twoColumn}>
        <section aria-labelledby="resume-education">
          <h2 id="resume-education" className={resumeStyles.heading}>
            Education
          </h2>
          {resume.education.map((entry) => (
            <div key={entry.degree} className={resumeStyles.entry}>
              <p className={resumeStyles.entryTitle}>{entry.degree}</p>
              <p className={resumeStyles.jobMeta}>
                {entry.school} · {entry.period}
              </p>
            </div>
          ))}
        </section>

        <section aria-labelledby="resume-languages">
          <h2 id="resume-languages" className={resumeStyles.heading}>
            Languages
          </h2>
          <ul className={resumeStyles.plainList}>
            {resume.languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Resume;
