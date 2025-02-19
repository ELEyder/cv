import styles from "./index.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Loading = () => {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
    </div>
  );
}

export default Loading;
