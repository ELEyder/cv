import styles from "./Menu.module.css";
import { MenuItem } from "../../types/MenuItem";
import { Tooltip } from "antd";

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <nav className={styles.menu}>
      {items.map((item, index) => (
        <Tooltip title={item.label} placement="right">
          <a key={index} href={item.href} className={styles.link}>
            {item.icon}
            <span>{item.label}</span>
          </a>
        </Tooltip>
      ))}
    </nav>
  );
};

export default Menu;
