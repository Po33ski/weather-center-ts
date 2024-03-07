import { ReactNode } from "react";
import styles from "./ButtonLink.module.css";

export function ButtonLink({
  path,
  children,
}: {
  path: string;
  children: ReactNode | string;
}) {
  return (
    <div className={styles.setItems}>
      <a href={path} className={styles.button}>
        {children}
      </a>
    </div>
  );
}
