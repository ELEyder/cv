import { Suspense } from "react";
import Menu from "../../components/Menu";
import styles from "./index.module.css";
import { IMenuItem } from "../../types";
import { ReactComponent as HomeSvg } from "../../assets/svg/home.svg";
import { ReactComponent as FolderSvg } from "../../assets/svg/folder.svg";
import { ReactComponent as SkillsSvg } from "../../assets/svg/hammer.svg";
import { ReactComponent as CaseSvg } from "../../assets/svg/case.svg";
import { ReactComponent as ContactsSvg } from "../../assets/svg/contacts.svg";

import { AboutMe, Exp, Projects, Skills } from "../../sections";
import { Loading } from "../../components";

const Home = () => {
  const menuItems: IMenuItem[] = [
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
        <Suspense fallback={<Loading />}>
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
