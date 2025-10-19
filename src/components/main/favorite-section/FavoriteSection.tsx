import styles from "./favorite-section.module.scss";
import { instaPreview, under40$ } from "@/assets";

const FavoriteSection = () => {
  return (
    <section className={styles.favorite}>
      <h2 className={styles.title}>Young’s Favourite</h2>
      <div className={styles.content}>
        <div className={styles.card}>
          <img src={instaPreview} alt="" />
          <h3 className={styles.cardTitle}>Trending on instagram</h3>
          <h4 className={styles.explore}>Explore Now!</h4>
        </div>
        <div className={styles.card}>
          <img src={under40$} alt="" />
          <h3 className={styles.cardTitle}>All Under $40</h3>
          <h4 className={styles.explore}>Explore Now!</h4>
        </div>
      </div>
    </section>
  );
};

export default FavoriteSection;
