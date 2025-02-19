import { ReactNode } from "react";

export default interface IMenuItem {
  href: string;
  icon: ReactNode;
  label: string;
}