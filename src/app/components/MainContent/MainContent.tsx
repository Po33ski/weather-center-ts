import { ReactNode } from "react";
import styles from "./MainContent.module.css";

export function MainContent({ children }: { children: ReactNode }) {
  return <div className={styles.mainContent}>{children}</div>;
}
