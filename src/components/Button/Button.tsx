import { ReactNode } from "react";
import styles from "./Button.module.css"
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick = undefined }: ButtonProps) {
  return <a onClick={onClick} className={styles.button}>
  <span></span>
   <span></span>
   <span></span>
   <span></span>
  {children}</a>
}

export default Button;
