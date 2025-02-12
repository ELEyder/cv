import styles from "./Menu.module.css";
import { MenuItem } from "../../types/MenuItem";
import { Tooltip } from "antd";
import { Link } from "react-scroll";

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <nav className={styles.menu}>
      {items.map((item, index) => (
          <Link key={index} duration={100} to={item.href} className={styles.link}>
            {item.icon}
            <span>{item.label}</span>
          </Link>
      ))}
    </nav>
  );
};

export default Menu;
