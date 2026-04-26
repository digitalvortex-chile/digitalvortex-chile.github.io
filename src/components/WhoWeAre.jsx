import styles from './WhoWeAre.module.css';

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="section">
      <h2 className="roboto-bold">Who We Are</h2>

      <p className="service-description roboto-regular">
        We are a cross-functional team of seasoned professionals with diverse expertise and a strong track record of success. Our collaborative approach combines strategic insight, technical know-how, and real-world experience to deliver impactful solutions across industries. Proven results, agile execution, and a shared commitment to excellence define who we are.
      </p>

      <div className={styles.teamContainer}>
        <div className={styles.teamGrid}>
          <div className={styles.teamCard}>
            <a href="https://www.linkedin.com/in/alfonso-viveros/" target="_blank" rel="noopener noreferrer">
              <img
                src="/fotos/alfonso.webp"
                alt="Alfonso Viveros"
                className={styles.profileImage}
                loading="lazy"
                width="140"
                height="140"
              />
              <div className={`${styles.teamMemberName} roboto-medium`}>Alfonso Viveros</div>
              <div className={styles.teamMemberRole}>Co-Founder</div>
            </a>
          </div>
          <div className={styles.teamCard}>
            <a href="https://www.linkedin.com/in/carolina-campos-parra-b64b82186/" target="_blank" rel="noopener noreferrer">
              <img
                src="/fotos/carolina.webp"
                alt="Carolina Campos"
                className={styles.profileImage}
                loading="lazy"
                width="140"
                height="140"
              />
              <div className={`${styles.teamMemberName} roboto-medium`}>Carolina Campos</div>
              <div className={styles.teamMemberRole}>General Manager</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
