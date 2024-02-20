import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p>Find us on </p>
        <br />
        <a
          href="https://nextdoor.com/pages/tam-pham-tams-management-co-plumbing-electrical-hvac-fort-worth-tx/?init_source=org_pages&utm_campaign=1702364895672"
          target="_blank"
        >
          <img
            src="/assets/images/nextdoor_logo.webp"
            alt="Next Door Logo"
            className={styles.logo}
          />
        </a>
      </footer>
    </>
  );
}
