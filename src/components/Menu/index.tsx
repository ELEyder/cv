import styles from "./index.module.css";
import { Link } from "react-scroll";
import IMenuProps from "../../types/props/IMenuProps";

const Menu: React.FC<IMenuProps> = ({ items }) => {
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
