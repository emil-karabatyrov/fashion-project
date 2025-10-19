import styles from "./brands-section.module.scss";
import { amazon, hm, lacoste, levis, obey, shopify } from "@/assets";

const BrandsSection = () => {
  return (
    <section className={styles.brands}>
      <div className={styles.brandsList}>
        <img src={hm} alt="" />
        <img src={obey} alt="" />
        <img src={shopify} alt="" />
        <img src={lacoste} alt="" />
        <img src={levis} alt="" />
        <img src={amazon} alt="" />
      </div>
    </section>
  );
};

export default BrandsSection;
