import { ReactNode } from "react";
import styles from "./TopBar.module.css";

export function TopBar({ children }: { children: ReactNode }) {
  return (
    <div
      className={styles.topBar}
      style={{ backgroundImage: "url('/main_photo.jpg')" }}
    >
      {children}
    </div>
  );
}
