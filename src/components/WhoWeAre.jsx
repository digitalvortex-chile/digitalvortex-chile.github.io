import { useLanguage } from '../i18n/context';
import styles from './WhoWeAre.module.css';

export default function WhoWeAre() {
  const { t } = useLanguage();

  return (
    <section id="who-we-are" className="section">
      <h2 className="roboto-bold">{t.whoWeAre.title}</h2>

      <p className="service-description roboto-regular">
        {t.whoWeAre.text}
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
              <div className={styles.teamMemberRole}>{t.whoWeAre.roles.alfonso}</div>
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
              <div className={styles.teamMemberRole}>{t.whoWeAre.roles.carolina}</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
