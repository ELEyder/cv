import { lazy, Suspense } from "react";
import Menu from "../../components/Menu/Menu";
import styles from "./index.module.css";
import { MenuItem } from "../../types/MenuItem";
import { ReactComponent as HomeSvg } from "../../assets/svg/home.svg";
import { ReactComponent as FolderSvg } from "../../assets/svg/folder.svg";
import { ReactComponent as SkillsSvg } from "../../assets/svg/hammer.svg";
import { ReactComponent as CaseSvg } from "../../assets/svg/case.svg";
import { ReactComponent as ContactsSvg } from "../../assets/svg/contacts.svg";

// Carga diferida de los componentes
const AboutMe = lazy(() => import("../AboutMe"));
const Projects = lazy(() => import("../Projects"));
const Skills = lazy(() => import("../Skills"));
const Exp = lazy(() => import("../Exp"));
const Contacts = lazy(() => import("../Contacts"));
const Footer = lazy(() => import("../Footer"));

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
        <Suspense fallback={<div  style={{
          width : "100wh",
          height : "100vh;",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <img src="./logo.svg" />
          </div>}>
          <AboutMe />
          <Projects />
          <Skills />
          <Exp />
          <Contacts />
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}

export default Home;
