import { useContext } from "react";
import { Button } from "../Button/Button";
import styles from "./ModalInfo.module.css";
import { InfoModalContextType } from "@/app/types/types";
import { InfoModalContext } from "@/app/contexts/InfoModalContext";

export function ModalInfo() {
  const infoModalContext = useContext<InfoModalContextType | null>(
    InfoModalContext
  );
  return (
    <div className={styles.modal}>
      <h2>Information</h2>
      <p
        className={styles.p}
      >{`In this app you can check the weather forecast for most locations in the world. 
      In the top left corner you can choose whether you want to check the weather forecast, 
      current weather or past weather.`}</p>
      <p
        className={styles.p}
      >{`In the upper right corner you can change the metric system in which weather data will be displayed.`}</p>
      <Button
        onClick={() =>
          infoModalContext?.setIsInfoModalShown(
            !infoModalContext?.isInfoModalShown
          )
        }
      >
        Close
      </Button>
    </div>
  );
}
