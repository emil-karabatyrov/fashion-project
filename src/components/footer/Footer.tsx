import styles from "./footer.module.scss";
import { facebook, infeed, instagram, twitter } from "@/assets";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.feedback}>
        <h2>FASHION</h2>
        <p>Complete your style with awesome clothes from us.</p>
        <div className={styles.networking}>
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={infeed} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
      <div className={styles.links}>
        <div className={`${styles.company} ${styles.linksBlock}`}>
          <h4>Company</h4>
          <ul className={styles.list}>
            <li>About</li>
            <li>Contact us</li>
            <li>Support</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className={`${styles.quickLink} ${styles.linksBlock}`}>
          <h4>Quick Link</h4>
          <ul className={styles.list}>
            <li>Share Location</li>
            <li>Orders Tracking</li>
            <li>Size Guide</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className={`${styles.quickLink} ${styles.linksBlock}`}>
          <h4>Legal</h4>
          <ul className={styles.list}>
            <li>Terms & conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
