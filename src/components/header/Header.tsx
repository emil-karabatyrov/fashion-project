import styles from "./header.module.scss";
import { logo } from "@/assets";
import { useMediaQuery } from "@/hooks";
import { MenuOutlined } from "@ant-design/icons";
const Header = () => {
  const ism = useMediaQuery(`(max-width: 975px)`);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logotype Fashion" />
        <h1>FASHION</h1>
      </div>

      {!ism ? (
        <nav className={styles.menu}>
          <ul className={styles.menuList}>
            <li>CATALOGUE</li>
            <li>FASHION</li>
            <li>FAVOURITE</li>
            <li>LIFESTYLE</li>
          </ul>
          <button className={styles.signUp}>SIGN UP</button>
        </nav>
      ) : (
        <MenuOutlined style={{ fontSize: 32 }} />
      )}
    </header>
  );
};

export default Header;
