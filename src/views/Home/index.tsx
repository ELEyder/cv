import { Suspense } from "react";
import Menu from "../../components/Menu";
import styles from "./index.module.css";
import { MenuItem } from "../../types/core/IMenuItem";
import { ReactComponent as HomeSvg } from "../../assets/svg/home.svg";
import { ReactComponent as FolderSvg } from "../../assets/svg/folder.svg";
import { ReactComponent as SkillsSvg } from "../../assets/svg/hammer.svg";
import { ReactComponent as CaseSvg } from "../../assets/svg/case.svg";
import { ReactComponent as ContactsSvg } from "../../assets/svg/contacts.svg";

import { AboutMe, Exp, Projects, Skills } from "../../sections";

function Home() {
  const menuItems: MenuItem[] = [
    { href: "aboutMe", icon: <HomeSvg className={styles.svg}/>, label: "Sobre mí" },
    { href: "projects", icon: <FolderSvg className={styles.svg}/>, label: "Proyectos" },
    { href: "skills", icon: <SkillsSvg className={styles.svg}/>, label: "Habilidades" },
    { href: "exp", icon: <CaseSvg className={styles.svg}/>, label: "Experiencia" },
    { href: "contacts", icon: <ContactsSvg className={styles.svg}/>, label: "Contactos" },
  ];

  return (
    <main className={styles.main}>
      <Menu items={menuItems} />
      <div className={styles.sections}>
        <Suspense fallback={<div  style={{
          width : "100wh",
          height : "100vh",
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
        </Suspense>
      </div>
    </main>
  );
}

export default Home;
