import styles from "./vouchers-section.module.scss";
import { appstore, googleplay, mobileapp } from "@/assets";

const VouchersSection = () => {
  return (
    <section className={styles.vouchers}>
      <div className={styles.download}>
        <h2 className={styles.title}>DOWNLOAD APP & GET THE VOUCHER!</h2>
        <p className={styles.description}>
          Get 30% off for first transaction using Rondovision mobile app for
          now.
        </p>
        <div className={styles.downloadBtns}>
          <button>
            <img src={appstore} alt="" />
          </button>
          <button>
            <img src={googleplay} alt="" />
          </button>
        </div>
      </div>
      <img src={mobileapp} alt="" />
    </section>
  );
};

export default VouchersSection;
