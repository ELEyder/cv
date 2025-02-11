import Menu from "../../components/Menu/Menu";
import styles from "./index.module.css";
import { MenuItem } from "../../types/MenuItem";
import AboutMe from "../AboutMe";
import Projects from "../Projects";
import { ReactComponent as HomeSvg } from '../../assets/svg/home.svg';
import { ReactComponent as FolderSvg } from '../../assets/svg/folder.svg';
import { ReactComponent as HistorySvg } from '../../assets/svg/history.svg';
import { ReactComponent as ContactsSvg } from '../../assets/svg/contacts.svg';

function Home() {
  const menuItems: MenuItem[] = [
    { href: "#", icon: <HomeSvg />, label: "Sobre mí" },
    { href: "#", icon: <FolderSvg />, label: "Proyectos" },
    { href: "#", icon: <HistorySvg />, label: "Experiencia" },
    { href: "#", icon: <ContactsSvg />, label: "Contactos" },
  ];

  return (
    <main className={styles.main}>
      <Menu items={menuItems} />
      <div className={styles.sections}>
        <AboutMe />
        <Projects />
      </div>
    </main>
  );
}

export default Home;
