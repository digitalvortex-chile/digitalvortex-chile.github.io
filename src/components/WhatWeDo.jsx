import { FaHandshake, FaChartLine, FaBuilding, FaCoins } from 'react-icons/fa';
import styles from './WhatWeDo.module.css';

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="section">
      <h1 className="roboto-bold">What We Do</h1>

      <div className={styles.servicesContainer}>
        <div className={styles.serviceItem}>
          <h3 className="roboto-medium">Business Management</h3>
          <p className={`${styles.serviceDescription} roboto-regular`}>
            Our business management philosophy is rooted in minimalism—prioritizing what truly matters to drive performance and foster strong commercial relationships. We streamline operations by focusing only on essential elements, eliminating unnecessary complexity, and aligning every effort with clear, measurable outcomes.
          </p>

          <h4 className={`${styles.corePrinciplesHeading} roboto-medium`}>Core Principles:</h4>
          <div className={styles.principlesContainer}>
            <div className={styles.principleItem}>
              <span className={styles.principleBullet}>•</span>
              <span className={styles.principleTitle}>Clear Strategy:</span>
              <span className={styles.principleDesc}>Focused, intentional direction that guides all decisions and actions.</span>
            </div>
            <div className={styles.principleItem}>
              <span className={styles.principleBullet}>•</span>
              <span className={styles.principleTitle}>Key Relationships:</span>
              <span className={styles.principleDesc}>Prioritize and nurture high-impact partnerships for mutual growth.</span>
            </div>
            <div className={styles.principleItem}>
              <span className={styles.principleBullet}>•</span>
              <span className={styles.principleTitle}>Automation:</span>
              <span className={styles.principleDesc}>Leverage smart systems to reduce manual work and increase consistency.</span>
            </div>
            <div className={styles.principleItem}>
              <span className={styles.principleBullet}>•</span>
              <span className={styles.principleTitle}>Constant Measurement:</span>
              <span className={styles.principleDesc}>Track performance rigorously to stay agile and optimize continuously.</span>
            </div>
            <div className={styles.principleItem}>
              <span className={styles.principleBullet}>•</span>
              <span className={styles.principleTitle}>Simplicity:</span>
              <span className={styles.principleDesc}>Eliminate clutter—keep structures, communication, and processes lean and effective.</span>
            </div>
          </div>
        </div>

        <div className={styles.serviceItem}>
          <h3 className="roboto-medium">Institutional Relations</h3>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <FaHandshake className={styles.serviceCardIcon} />
              <div className={`${styles.serviceName} roboto-medium`}>Representations</div>
            </div>
            <div className={styles.serviceCard}>
              <FaChartLine className={styles.serviceCardIcon} />
              <div className={`${styles.serviceName} roboto-medium`}>Strategic Consulting</div>
            </div>
            <div className={styles.serviceCard}>
              <FaBuilding className={styles.serviceCardIcon} />
              <div className={`${styles.serviceName} roboto-medium`}>Real Estate Management</div>
            </div>
            <div className={styles.serviceCard}>
              <FaCoins className={styles.serviceCardIcon} />
              <div className={`${styles.serviceName} roboto-medium`}>Investment Funds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
