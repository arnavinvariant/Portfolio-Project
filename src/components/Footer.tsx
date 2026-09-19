import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerInfo}>
          <p className={styles.copyright}>&copy; {currentYear} Arnav Gupta</p>
          <p className={styles.tagline}>Independent Researcher</p>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://orcid.org/0009-0003-0592-2530" target="_blank" rel="noreferrer" className={styles.socialLink}>ORCID</a>
          <a href="https://scholar.google.com/citations?user=0ZMfzKcAAAAJ&hl=en" target="_blank" rel="noreferrer" className={styles.socialLink}>Scholar</a>
          <a href="https://github.com/arnavinvariant" target="_blank" rel="noreferrer" className={styles.socialLink}>GitHub</a>
          <a href="https://linkedin.com/in/arnavinvariant" target="_blank" rel="noreferrer" className={styles.socialLink}>LinkedIn</a>
          <a href="mailto:arnav.gupta.ai@outlook.com" className={styles.socialLink}>Email</a>
        </div>
      </div>
    </footer>
  );
}
