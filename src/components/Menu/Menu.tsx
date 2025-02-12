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
        <Tooltip title={item.label} placement="right">
          <Link key={index} duration={100} to={item.href} className={styles.link}>
            {item.icon}
            <span>{item.label}</span>
          </Link>
        </Tooltip>
      ))}
    </nav>
  );
};

export default Menu;
