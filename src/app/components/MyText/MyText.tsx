import { ReactNode } from "react";
import styles from "./MyText.module.css";

export function MyText({ children }: { children: ReactNode }) {
  return <h1 className={styles.text}>{children}</h1>;
}
