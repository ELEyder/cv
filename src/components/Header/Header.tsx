import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <nav className={styles.nav}>
      <Link to="/">Inicio</Link>
      <img className={styles.logo} src="logo.svg" alt="logo" />
      <Link to="/blog">Blog</Link>
    </nav>
  );
}

export default Header;
