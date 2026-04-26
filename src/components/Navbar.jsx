import { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Main navigation">
        <div className={styles.navbarEmpty}></div>
        <div className={styles.contentContainer}>
          <div className={styles.logo}>
            <img
              src="/assets/logo-digital-vortex.png"
              alt="Digital Vortex Logo"
              width="112"
              height="50"
            />
          </div>
          <div className={styles.menuIcon} onClick={toggleMenu} ref={menuRef}>
            <FaBars />
            <div className={`${styles.dropdownMenu} ${menuOpen ? styles.show : ''}`}>
              <a href="#what-we-do" onClick={() => setMenuOpen(false)}>What We Do</a>
              <a href="#who-we-are" onClick={() => setMenuOpen(false)}>Who We Are</a>
              <a href="#success-cases" onClick={() => setMenuOpen(false)}>Success Cases</a>
            </div>
          </div>
        </div>
        <div className={styles.navbarEmpty}></div>
      </nav>
    </header>
  );
}
