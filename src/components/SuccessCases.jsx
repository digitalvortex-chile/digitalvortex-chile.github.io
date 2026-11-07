import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '../i18n/context';
import styles from './SuccessCases.module.css';

const STEPS = ['challenge', 'approach', 'impact'];

export default function SuccessCases() {
  const { t } = useLanguage();
  const copy = t.successCases;
  const [openCases, setOpenCases] = useState(() => new Set());

  const toggleCase = (index) => {
    setOpenCases((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section id="success-cases" className="section">
      <h2 className="roboto-bold">{copy.title}</h2>

      <p className="service-description roboto-regular">{copy.intro}</p>

      <div className={styles.casesGrid}>
        {copy.cases.map((item, i) => {
          const isOpen = openCases.has(i);
          const storyId = `case-story-${i}`;

          return (
            <article key={item.client} className={`${styles.caseCard} ${isOpen ? styles.caseOpen : ''}`}>
              <header className={styles.caseHeader}>
                <span className={styles.caseNumber}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.caseTag}>{item.tag}</span>
              </header>

              <h3 className={`${styles.caseClient} roboto-medium`}>{item.client}</h3>
              <p className={styles.caseArea}>{item.area}</p>

              <ol className={styles.caseSteps}>
                {STEPS.map((step) => (
                  <li key={step} className={styles.caseStep}>
                    <span className={styles.stepLabel}>{copy.labels[step]}</span>
                    <span className={styles.stepText}>{item[step]}</span>
                  </li>
                ))}
              </ol>

              <div id={storyId} className={styles.caseStory} inert={!isOpen}>
                <div className={styles.caseStoryInner}>
                  <p>{item.story}</p>
                </div>
              </div>

              <button
                type="button"
                className={styles.caseToggle}
                aria-expanded={isOpen}
                aria-controls={storyId}
                onClick={() => toggleCase(i)}
              >
                {isOpen ? copy.readLess : copy.readMore}
                <FaChevronDown className={styles.caseChevron} aria-hidden="true" />
              </button>
            </article>
          );
        })}
      </div>

      <h3 className={`${styles.institutionalRelationsHeading} roboto-medium`}>{copy.institutionalTitle}</h3>
      <p className="service-description roboto-regular">{copy.institutionalText}</p>
    </section>
  );
}
