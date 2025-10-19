import styles from "./clothes-section.module.scss";
import { uniqueClothes } from "@/assets";

const ClothesSection = () => {
  return (
    <section className={styles.clothes}>
      <div className={styles.content}>
        <h2 className={styles.title}>LET’S EXPLORE UNIQUE CLOTHES.</h2>
        <p className={styles.description}>
          Live for Influential and Innovative fashion!
        </p>
        <button>SHOP NOW</button>
      </div>
      <img
        className={styles.clothesImg}
        src={uniqueClothes}
        alt="Poster Unigue Clothes"
      />
    </section>
  );
};

export default ClothesSection;
