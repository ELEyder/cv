import Menu from "../../components/Menu/Menu";
import styles from "./index.module.css";
import { MenuItem } from "../../types/MenuItem";
import AboutMe from "./AboutMe";

function Home() {
  const menuItems: MenuItem[] = [
    { href: "#", icon: "svg/home.svg", label: "Sobre mí" },
    { href: "#", icon: "svg/folder.svg", label: "Proyectos" },
    { href: "#", icon: "svg/history.svg", label: "Experiencia" },
    { href: "#", icon: "svg/contacts.svg", label: "Contactos" },
  ];

  return (
    <main className={styles.main}>
      <Menu items={menuItems} />
      <div className={styles.sections}>
        <AboutMe />
      </div>
    </main>
  );
}

export default Home;
