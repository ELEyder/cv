import styles from "./Menu.module.css";
import { MenuItem } from "../../types/MenuItem";

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <nav className={styles.menu}>
      {items.map((item, index) => (
        <a key={index} href={item.href} className={styles.link}>
          <img src={item.icon} alt={item.label.charAt(0)} className={styles.icon} />
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default Menu;