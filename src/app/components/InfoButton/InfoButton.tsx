import { useContext } from "react";
import styles from "./InfoButton.module.css";
import { InfoModalContext } from "@/app/contexts/InfoModalContext";
import { InfoModalContextType } from "@/app/types/types";

export function InfoButton() {
  const infoModalContext = useContext<InfoModalContextType | null>(
    InfoModalContext
  );

  function handleOnClick() {
    infoModalContext?.setIsInfoModalShown(!infoModalContext.isInfoModalShown);
  }

  return (
    <ul className={styles.info}>
      <li>
        <button onClick={handleOnClick} className={styles.button}>
          🛈
        </button>
      </li>
    </ul>
  );
}
