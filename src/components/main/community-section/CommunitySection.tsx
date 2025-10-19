import styles from "./community-section.module.scss";

const CommunitySection = () => {
  return (
    <section className={styles.community}>
      <h2 className={styles.title}>
        JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
      </h2>
      <p className={styles.description}>
        Type your email down below and be young wild generation
      </p>
      <form action="#" className={styles.form}>
        <div className={styles.inputWrapper}>
          <input type="email" placeholder="Add your email here" />
          <button type="submit">SEND</button>
        </div>
      </form>
    </section>
  );
};

export default CommunitySection;
