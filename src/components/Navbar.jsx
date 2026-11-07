import { useState, useEffect, useRef } from 'react';
import { FaInstagram, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';
import { useLanguage } from '../i18n/context';
import { LANGUAGES } from '../i18n/translations';
import styles from './Navbar.module.css';

const NAV_HREFS = ['#what-we-do', '#who-we-are', '#success-cases'];

const CONTACT_EMAIL = 'contact@digitalvortex.biz';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const firstLinkRef = useRef(null);
  const wasOpen = useRef(false);

  // Header shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll, handle Escape and focus while the menu is open
  useEffect(() => {
    if (!menuOpen) {
      if (wasOpen.current) toggleRef.current?.focus();
      wasOpen.current = false;
      return;
    }
    wasOpen.current = true;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    firstLinkRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const headerClass = [
    styles.header,
    scrolled ? styles.scrolled : '',
    menuOpen ? styles.headerOpen : '',
  ].join(' ');

  return (
    <>
      <header className={headerClass}>
        <nav className={styles.navbar} aria-label={t.nav.mainNav}>
          <a href="#" className={styles.logo} onClick={closeMenu} aria-label={t.nav.home}>
            <img
              src="/assets/logo-digital-vortex.svg"
              alt="Digital Vortex Logo"
              width="115"
              height="50"
            />
          </a>

          <div className={styles.actions}>
            <div className={styles.langSwitch} role="group" aria-label={t.nav.language}>
              {LANGUAGES.map((code) => (
                <button
                  key={code}
                  type="button"
                  lang={code}
                  className={code === lang ? styles.langActive : ''}
                  aria-pressed={code === lang}
                  onClick={() => setLang(code)}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              ref={toggleRef}
              type="button"
              className={`${styles.toggle} ${menuOpen ? styles.toggleOpen : ''}`}
              aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className={styles.toggleLabel} aria-hidden="true">
                {menuOpen ? t.nav.close : t.nav.menu}
              </span>
              <span className={styles.bars} aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <div
        id="site-menu"
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={t.nav.siteMenu}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <svg className={styles.vortex} viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r="46" />
          <circle cx="50" cy="50" r="36" />
          <circle cx="50" cy="50" r="26" />
          <circle cx="50" cy="50" r="16" />
        </svg>

        <div className={styles.overlayInner}>
          <ul className={styles.menuList}>
            {NAV_HREFS.map((href, i) => (
              <li key={href} style={{ '--i': i }}>
                <a
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={href}
                  className={styles.menuLink}
                  onClick={closeMenu}
                >
                  <span className={styles.menuIndex}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.menuText}>{t.nav.links[i]}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.menuFooter} style={{ '--i': NAV_HREFS.length }}>
            <a href={`mailto:${CONTACT_EMAIL}`} className={styles.cta} onClick={closeMenu}>
              {t.nav.contact}
            </a>
            <div className={styles.social}>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Email"><FaRegEnvelope /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
