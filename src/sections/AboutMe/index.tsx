import styles from "./index.module.css";
import Button from "../../components/Button";

const AboutMe = () => {
  return (
    <section className={styles.aboutMe} id="aboutMe">
      <div className={styles.text}>
        <div className={styles.content}>
          <h1>Soy Eyder Huayta</h1>
          <h2>Desarrollador Web</h2>
          <p>
            Desarrollador de Software con <strong>2 año de experiencia</strong> en el desarrollo
            web. Sólidos conocimientos en diseño, implementación y mantenimiento
            de soluciones de software, con habilidades en <strong>PHP, Java, Typescript y 
            JavaScript</strong>, y experiencia en tecnologías como <strong>Laravel, Spring Boot y
            React</strong>
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
