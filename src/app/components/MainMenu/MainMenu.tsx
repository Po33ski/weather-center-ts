"use client";
import styles from "./MainMenu.module.css";
import { OPTIONS } from "@/app/constants/menuOptions";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainMenu() {
  const pathname: string = usePathname();
  console.log(pathname);

  return (
    <ul className={styles.mainMenu}>
      {OPTIONS.map(({ path, optionName }) => (
        <li key={path}>
          <span className={pathname === path ? "active" : ""}>
            <Link href={path}>{optionName}</Link>
          </span>
        </li>
      ))}
    </ul>
  );
}
