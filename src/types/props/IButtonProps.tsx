import { ReactNode } from "react";

export default interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}