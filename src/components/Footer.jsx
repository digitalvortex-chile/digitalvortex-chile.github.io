import { FaInstagram, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';
import { useLanguage } from '../i18n/context';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className="roboto-medium">{t.footer.follow}</p>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialIcon} aria-label="Instagram"><FaInstagram /></a>
          <a href="#" className={styles.socialIcon} aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="mailto:contact@digitalvortex.biz" className={styles.socialIcon} aria-label="Email"><FaRegEnvelope /></a>
        </div>
      </div>
    </footer>
  );
}
