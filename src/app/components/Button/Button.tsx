import { ReactNode } from "react";
import styles from "./Button.module.css";

export function Button({
  onClick,
  children,
}: {
  onClick: React.MouseEventHandler;
  children: ReactNode | string;
}) {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}
