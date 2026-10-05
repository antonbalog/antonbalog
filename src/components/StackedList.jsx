import { Link } from 'react-router-dom';

import stackedStyles from './StackedList.module.scss';

// Large stacked titles, as on the reference home page. The row under the
// pointer (or keyboard focus) turns black and opens a panel with its label.
const StackedList = ({ items, ariaLabel }) => {
  return (
    <ol className={stackedStyles.list} aria-label={ariaLabel}>
      {items.map(({ id, title, summary, label, to }, index) => (
        <li key={id} className={stackedStyles.row}>
          <Link to={to} className={stackedStyles.link}>
            <span className={stackedStyles.number}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className={stackedStyles.title}>{title}</span>
          </Link>
          {summary && <p className={stackedStyles.mobileSummary}>{summary}</p>}

          <div className={stackedStyles.panel} aria-hidden="true">
            <p className={stackedStyles.panelSummary}>{summary}</p>
            <span className={stackedStyles.panelLabel}>{label ?? title}</span>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default StackedList;
