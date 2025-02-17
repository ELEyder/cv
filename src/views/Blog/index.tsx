import { Link } from "react-router-dom";
import styles from "./indes.module.css"

function Blog() {
  return (
    <div className={styles.content}>
      <Link to={"/"}>Próximamente</Link>
    </div>
  );
}

export default Blog;
