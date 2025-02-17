import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import styles from "./Header.module.css";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();
  const classnameLogo = location.pathname == "/" ? styles.logo : styles.logo2
  return (
    <header className={styles.header}>
      <Logo className={classnameLogo}/>
      <nav className={styles.nav}>
        <Link to="/">
          <span>{"<"}</span>Inicio <span>{" />"}</span>
        </Link>
        <Link to="/blog">
          <span>{"<"}</span>Blog <span>{" />"}</span>
        </Link>
        <ThemeSwitch />
      </nav>
    </header>
  );
}

export default Header;
