import styles from "./App.module.scss";
import {
  Header,
  BannerSection,
  BrandsSection,
  ClothesSection,
  ArrivalsSection,
  FavoriteSection,
  VouchersSection,
  CommunitySection,
  Footer,
} from "./components";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <ClothesSection />
          <BrandsSection />
          <ArrivalsSection />
          <BannerSection />
          <FavoriteSection />
          <VouchersSection />
          <CommunitySection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
