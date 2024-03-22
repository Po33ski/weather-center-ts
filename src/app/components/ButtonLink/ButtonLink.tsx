import { ReactNode } from "react";
import styles from "./ButtonLink.module.css";
import Link from "next/link";

export function ButtonLink({
  path,
  children,
}: {
  path: string;
  children: ReactNode | string;
}) {
  return (
    <div className={styles.setItems}>
      <Link href={path} className={styles.button}>
        {children}
      </Link>
    </div>
  );
}
