import styles from "./index.module.css";
import Button from "../../../components/Button/Button";

function AboutMe() {

  return (
        <section className={styles.aboutMe} id="#">
          <div className={styles.text}>
            <h1>Hola, soy Eyder</h1>
            <p>Desarrollador Web</p>
            <Button onClick={() => {
              window.open('pdf/EYDER_HUAYTA.pdf', '_blank')
            }}>Descargar CV</Button>
          </div>
          <div className={styles.media}>
            <img src="logo.svg" alt="logo" />
          </div>
        </section>
  );
}

export default AboutMe;
