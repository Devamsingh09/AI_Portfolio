import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>© 2026 Devam Singh. Designed & coded with ♥</p>
      <ul className={styles.links}>
        <li><a href="https://github.com/Devamsingh09" target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href="https://linkedin.com/in/devamsingh" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href="mailto:devamsingh0009@gmail.com">Email</a></li>
      </ul>
    </footer>
  );
}
