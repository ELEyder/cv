import { Link } from "react-router-dom";
import styles from "./index.module.css";

function Error() {
  return (
    <section className={styles.container}>
      <img src="images/bg/bg4.gif" />
      <h1>Error 404</h1>
      <Link to={"/"}>Ir al inicio</Link>
    </section>
  );
}

export default Error;
