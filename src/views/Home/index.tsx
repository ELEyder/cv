import Menu from "../../components/Menu/Menu";
import styles from "./index.module.css";

function Home() {
  return (
    <main className={styles.main}>
      <Menu>
        <a href="#">
          <img src="svg/home.svg" />
          <span>Sobre mi</span>
        </a>
        <a href="#">
          <img src="svg/folder.svg" />
          <span>Proyectos</span>
        </a>
        <a href="#">
          <img src="svg/history.svg" />
          <span>Experiencia</span>
        </a>
        <a href="#">
          <img src="svg/contacts.svg" />
          <span>Contactos</span>
        </a>
      </Menu>
    </main>
  );
}

export default Home;
