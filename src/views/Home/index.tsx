import Menu from "../../components/Menu/Menu";
import styles from "./index.module.css";
import { MenuItem } from "../../types/MenuItem";
import AboutMe from "../AboutMe";
import Projects from "../Projects";
import Skills from "../Skills";
import Exp from "../Exp";
import Contacts from "../Contacts";
import Footer from "../Footer";
import { ReactComponent as HomeSvg } from '../../assets/svg/home.svg';
import { ReactComponent as FolderSvg } from '../../assets/svg/folder.svg';
import { ReactComponent as SkillsSvg } from '../../assets/svg/hammer.svg';
import { ReactComponent as CaseSvg } from '../../assets/svg/case.svg';
import { ReactComponent as ContactsSvg } from '../../assets/svg/contacts.svg';

function Home() {
  const menuItems: MenuItem[] = [
    { href: "#aboutMe", icon: <HomeSvg />, label: "Sobre mí" },
    { href: "#projects", icon: <FolderSvg />, label: "Proyectos" },
    { href: "#skills", icon: <SkillsSvg />, label: "Habilidades" },
    { href: "#exp", icon: <CaseSvg />, label: "Experiencia" },
    { href: "#contacts", icon: <ContactsSvg />, label: "Contactos" },
  ];

  return (
    <main className={styles.main}>
      <Menu items={menuItems} />
      <div className={styles.sections}>
        <AboutMe />
        <Projects />
        <Skills />
        <Exp />
        <Contacts />
        <Footer />
      </div>
    </main>
  );
}

export default Home;
