"use client";
import styles from "./MainMenu.module.css";
import { OPTIONS } from "@/app/constants/menuOptions";
import { usePathname } from "next/navigation";

export function MainMenu() {
  const pathname: string = usePathname();
  console.log(pathname);

  return (
    <ul className={styles.mainMenu}>
      {OPTIONS.map(({ path, optionName }) => (
        <li key={path}>
          <a className={pathname === path ? "active" : ""} href={path}>
            {optionName}
          </a>
        </li>
      ))}
    </ul>
  );
}
