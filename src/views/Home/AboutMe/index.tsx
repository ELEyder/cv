import styles from "./index.module.css";
import Button from "../../../components/Button/Button";

function AboutMe() {
  return (
        <section className={styles.aboutMe} id="#">
          <div className={styles.text}>
            <div className={styles.content}>
            <h1>Hola, soy Eyder</h1>
            <p>Desarrollador Web</p>
            <Button onClick={() => {
              window.open('pdf/EYDER_HUAYTA.pdf', '_blank')
            }}>Descargar CV</Button>
            </div>
          </div>
          <div className={styles.media}>
            <img className={styles.banner} src={"./img/bg1.gif"} alt="bg1" />
          </div>
        </section>
  );
}

export default AboutMe;
