import { site } from '../content/site';
import contactStyles from './Contact.module.scss';

const Contact = () => {
  return (
    <main className={contactStyles.page}>
      <header className={contactStyles.intro}>
        <p className={contactStyles.eyebrow}>Contact</p>
        <h1 className={contactStyles.title}>Let's talk about your platform</h1>
        <p className={contactStyles.lead}>
          Tell me what you're trying to fix or build, and we'll take it from
          there.
        </p>
      </header>

      <div className={contactStyles.actions}>
        {site.calendlyUrl && (
          <a
            href={site.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={contactStyles.primary}
          >
            Book a call
          </a>
        )}
        <a
          href={`mailto:${site.email}?subject=${encodeURIComponent('Enquiry from antonbalog.com')}`}
          className={contactStyles.secondary}
        >
          Email {site.email}
        </a>
      </div>

      <ul className={contactStyles.links}>
        <li>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={contactStyles.textLink}
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </main>
  );
};

export default Contact;
