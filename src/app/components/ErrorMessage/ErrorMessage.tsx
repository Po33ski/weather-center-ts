import { ReactNode } from "react";
import styles from "./ErrorMessage.module.css";

export function ErrorMessage({ children }: { children: ReactNode }) {
  return <span className={styles.error}>{children}</span>;
}
