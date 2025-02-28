import styles from "./index.module.css";
import Button from "../../components/Button";

const AboutMe = () => {
  return (
    <section className={styles.aboutMe} id="aboutMe">
      <div className={styles.text}>
        <div className={styles.content}>
          <h1>Hola, Soy Eyder - Desarrollador Web</h1>
          <p>
            Desarrollador de Software con 2 años de experiencia en desarrollo
            web. Sólidos conocimientos en diseño, implementación y mantenimiento           de soluciones de software, con habilidades en Php, Java y
            JavaScript, y experiencia en tecnologías como Laravel, Spring Boot y
            React
          </p>
          <Button
            onClick={() => {
              window.open("pdf/Eyder_Huayta_CV.pdf", "_blank");
            }}
          >
            Descargar CV
          </Button>
        </div>
      </div>
      <div className={styles.media}>
        <img className={styles.banner} src={"./images/bg/bg1.webp"} alt="bg1" />
      </div>
    </section>
  );
};

export default AboutMe;
