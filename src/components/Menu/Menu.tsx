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
          {item.icon}
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default Menu;