import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import styles from "./Header.module.css";
import ThemeSwitch from "../../components/ThemeSwitch";
import { useLocation } from 'react-router-dom';
function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const classnameLink = isHomePage ? styles.link : styles.link2
  return (
    <header className={styles.header}>
      <Logo className={styles.logo}/>
      <nav className={styles.nav}>
        <Link to="/" className={classnameLink}>
          <span>{"<"}</span>Inicio <span>{" />"}</span>
        </Link>
        <Link to="/blog" className={classnameLink}>
          <span>{"<"}</span>Blog <span>{" />"}</span>
        </Link>
        <ThemeSwitch />
      </nav>
    </header>
  );
}

export default Header;
