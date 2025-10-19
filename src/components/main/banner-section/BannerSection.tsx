import styles from "./banner-section.module.scss";
import { payDay } from "@/assets";

const BannerSection = () => {
  return (
    <section className={styles.banner}>
      <img src={payDay} alt="" />

      <div className={styles.content}>
        <h2 className={styles.title}>
          PAYDAY <br />
          SALE NOW
        </h2>
        <p className={styles.description}>
          Spend minimal $100 get 30% off voucher code for your next purchase
        </p>
        <div className={styles.additionalInfo}>
          <p className={styles.interval}>1 June - 10 June 2021</p>
          <p className={styles.conditions}>*Terms & Conditions apply</p>
        </div>
        <button>SHOP NOW</button>
      </div>
    </section>
  );
};

export default BannerSection;
