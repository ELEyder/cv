import { ReactNode } from "react";
import styles from "./Menu.module.css";

interface MenuProps {
  children : ReactNode
}

function Menu({ children } : MenuProps) {
  return (
    <div className={styles.menu}>
      { children }
    </div>
  );
}

export default Menu;
