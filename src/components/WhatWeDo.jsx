import { FaHandshake, FaChartLine, FaBuilding, FaCoins } from 'react-icons/fa';
import { useLanguage } from '../i18n/context';
import styles from './WhatWeDo.module.css';

// Icons in the same order as t.whatWeDo.services
const SERVICE_ICONS = [FaHandshake, FaChartLine, FaBuilding, FaCoins];

export default function WhatWeDo() {
  const { t } = useLanguage();
  const copy = t.whatWeDo;

  return (
    <section id="what-we-do" className="section">
      <h1 className="roboto-bold">{copy.title}</h1>

      <div className={styles.servicesContainer}>
        <div className={styles.serviceItem}>
          <h3 className="roboto-medium">{copy.businessTitle}</h3>
          <p className={`${styles.serviceDescription} roboto-regular`}>{copy.businessText}</p>

          <h4 className={`${styles.corePrinciplesHeading} roboto-medium`}>{copy.principlesTitle}</h4>
          <div className={styles.principlesContainer}>
            {copy.principles.map((principle) => (
              <div key={principle.title} className={styles.principleItem}>
                <span className={styles.principleBullet}>•</span>
                <span className={styles.principleTitle}>{principle.title}</span>
                <span className={styles.principleDesc}>{principle.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.serviceItem}>
          <h3 className="roboto-medium">{copy.institutionalTitle}</h3>
          <div className={styles.servicesGrid}>
            {copy.services.map((service, i) => {
              const Icon = SERVICE_ICONS[i];
              return (
                <article key={service.name} className={styles.serviceCard}>
                  <span className={styles.serviceCardIcon} aria-hidden="true">
                    <Icon />
                  </span>
                  <h4 className={`${styles.serviceName} roboto-medium`}>{service.name}</h4>
                  <p className={styles.serviceCardDesc}>{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
