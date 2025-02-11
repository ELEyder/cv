import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as Logo } from '../../assets/logo.svg';
import styles from "./Header.module.css";

function Header() {
  const [theme, setTheme] = useState(true)
  const switchColor = () => {
    if (theme) {
      document.documentElement.style.setProperty('--body-color', "black");
      document.documentElement.style.setProperty('--link-color', "white");
      document.documentElement.style.setProperty('--text-color', "white");
      document.documentElement.style.setProperty('--svg-color', "white");
    } else {
      document.documentElement.style.setProperty('--body-color', "white");
      document.documentElement.style.setProperty('--link-color', "#5f6368");
      document.documentElement.style.setProperty('--text-color', "black");
      document.documentElement.style.setProperty('--svg-color', "#5f6368");
    }
    setTheme((prev) => !prev)
  };
  return (
    <nav className={styles.nav}>
      <Link to="/">Opciones</Link>
      <Link to="/">Inicio</Link>
      <Logo/>
      <Link to="/blog">Blog</Link>
      <a onClick={switchColor}>Tema</a>
    </nav>
  );
}

export default Header;
