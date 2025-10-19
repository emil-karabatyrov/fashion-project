import styles from "./arrivals-section.module.scss";
import { hoodies, parkas, tees } from "@/assets";

const ArrivalsSection = () => {
  return (
    <section className={styles.arrivals}>
      <h2 className={styles.title}>NEW ARRIVALS</h2>
      <div className={styles.content}>
        <div className={styles.card}>
          <img src={hoodies} alt="" />
          <h3 className={styles.cardTitle}>Hoodies & Sweetshirt</h3>
          <h4 className={styles.explore}>Explore Now!</h4>
        </div>
        <div className={styles.card}>
          <img src={parkas} alt="" />
          <h3 className={styles.cardTitle}>Coats & Parkas</h3>
          <h4 className={styles.explore}>Explore Now!</h4>
        </div>
        <div className={styles.card}>
          <img src={tees} alt="" />
          <h3 className={styles.cardTitle}>Tees & T-Shirt</h3>
          <h4 className={styles.explore}>Explore Now!</h4>
        </div>
      </div>
    </section>
  );
};

export default ArrivalsSection;
