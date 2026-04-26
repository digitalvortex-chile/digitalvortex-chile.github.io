import styles from './SuccessCases.module.css';

export default function SuccessCases() {
  return (
    <section id="success-cases" className="section">
      <h2 className="roboto-bold">Success Cases</h2>

      <p className="service-description roboto-regular">
        Our team has successfully lead and contributed to a wide range of projects across diverse industries. Each case reflects our ability to adapt, innovate, and deliver tangible results. Below are some of our most notable success stories, showcasing the impact of our strategic and hands-on approach.
      </p>

      <div className={styles.casesContainer}>
        <div className={styles.casesGrid}>
          <div className={styles.caseCard}>
            <h3 className="roboto-medium">TRES60</h3>
            <p className={styles.caseSubtitle}>Strategic Planning & Business Development | Digital Transformation</p>
            <p className={styles.caseDescription}>We lead the strategic planning and implementation of business development initiatives to support TRES60's digital transformation journey. Our work focused on aligning their core operations with emerging digital opportunities, optimizing internal processes, and identifying new revenue channels through innovation and technology.</p>
          </div>

          <div className={styles.caseCard}>
            <h3 className="roboto-medium">Codelco El Teniente Division</h3>
            <p className={styles.caseSubtitle}>Process Optimization & Technology Implementation | Operational Efficiency</p>
            <p className={styles.caseDescription}>We executed a comprehensive process optimization strategy and implemented targeted technologies to enhance operational efficiency within the El Teniente Division. The initiative streamlined key workflows, reduced bottlenecks, and supported sustainable performance improvements across critical functions.</p>
          </div>

          <div className={styles.caseCard}>
            <h3 className="roboto-medium">GLOBE S.A</h3>
            <p className={styles.caseSubtitle}>International Business Development | Market Expansion Strategies</p>
            <p className={styles.caseDescription}>We supported GLOBE S.A in designing and executing international business development strategies aimed at market expansion. Our work focused on identifying high-potential markets, building strategic partnerships, and adapting the company's value proposition to diverse global contexts, driving sustainable international growth.</p>
          </div>

          <div className={styles.caseCard}>
            <h3 className="roboto-medium">ECM Ingeniería S.A.</h3>
            <p className={styles.caseSubtitle}>Engineering Solutions & Process Management Systems</p>
            <p className={styles.caseDescription}>We led the implementation of advanced engineering solutions and integrated process management systems for ECM Ingeniería S.A. The project focused on enhancing technical capabilities, improving project execution efficiency, and establishing scalable systems to support operational growth.</p>
          </div>
        </div>
      </div>

      <h3 className={`${styles.institutionalRelationsHeading} roboto-medium`}>Institutional Relations</h3>
      <p className="service-description roboto-regular">
        We foster strong, strategic relationships with key institutions to enhance our influence, credibility, and access to opportunities. Our approach is proactive and collaborative, ensuring alignment with public and private stakeholders, regulatory bodies, and industry groups. These relationships are essential to navigating complex environments, supporting sustainable growth, and driving long-term value.
      </p>
    </section>
  );
}
