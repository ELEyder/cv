import styles from "./index.module.css";
import Button from "../../components/Button";

const AboutMe = () => {
  return (
        <section className={styles.aboutMe} id="aboutMe">
          <div className={styles.text}>
            <div className={styles.content}>
            <h1>Hola, Soy Eyder - Desarrollador Full Stack</h1>
            <p>Desarrollador junior enfocado en crear aplicaciones web con React. Con experiencia en APIs REST y Java Spring Boot, me apasiona aprender y mejorar continuamente mis habilidades en desarrollo web.</p>
            <Button onClick={() => {
              window.open('pdf/CV Eyder Huayta.pdf', '_blank')
            }}>Descargar CV</Button>
            </div>
          </div>
          <div className={styles.media}>
            <img className={styles.banner} src={"./images/bg/bg1.gif"} alt="bg1" />
          </div>
        </section>
  );
}

export default AboutMe;
