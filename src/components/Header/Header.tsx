import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import styles from "./Header.module.css";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

function Header() {

  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav}>
        <Link to="/">Inicio</Link>
        <Link to="/blog">Blog</Link>
        <ThemeSwitch />
      </nav>
    </header>
  );
}

export default Header;
