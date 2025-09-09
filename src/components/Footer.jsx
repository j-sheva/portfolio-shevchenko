// src/components/Footer.jsx

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__copy}>© Yuliia Shevchenko 2025</p>
      <ul className={styles.footer__links}>
        <li className={styles.footer__link}>
          <a
            href="https://www.linkedin.com/in/uliia-shevchenko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className={styles.footer__link}>
          <a
            href="https://www.behance.net/yuliiashevche4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
