import styles from "./index.module.css"
import IButtonProps from "../../types/props/IButtonProps"

const Button = ({ children, onClick }: IButtonProps) => {
  return <a onClick={onClick} className={styles.button}>
  <span></span>
   <span></span>
   <span></span>
   <span></span>
  {children}</a>
}

export default Button;
