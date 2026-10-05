import { Link } from 'react-router-dom';

import { services } from '../content/services';
import servicesStyles from './Services.module.scss';

const Services = () => {
  return (
    <main className={servicesStyles.page}>
      <header className={servicesStyles.intro}>
        <p className={servicesStyles.eyebrow}>Services</p>
        <h1 className={servicesStyles.title}>What I do for companies</h1>
        <p className={servicesStyles.lead}>
          Each engagement starts with the problem you actually have. I work in
          your teams and your tools, and I explain what I'm doing as I go.
        </p>
      </header>

      <ol className={servicesStyles.list}>
        {services.map((service, index) => (
          <li key={service.id} className={servicesStyles.item}>
            <span className={servicesStyles.index}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h2 className={servicesStyles.itemTitle}>{service.title}</h2>
              <p className={servicesStyles.itemSummary}>{service.summary}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className={servicesStyles.cta}>
        <Link to="/contact" className={servicesStyles.ctaLink}>
          Talk to me about your platform
        </Link>
      </p>
    </main>
  );
};

export default Services;
