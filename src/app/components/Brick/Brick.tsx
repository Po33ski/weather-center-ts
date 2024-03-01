import { useContext } from "react";
import { Icon } from "../Icon/Icon";
import { UnitSystemContext } from "@/app/contexts/UnitSystemContext";
import { BrickModalContext } from "@/app/contexts/BrickModalContext";
import { checkSign } from "@/app/functions/functions";
import { systemsConvert } from "@/app/functions/functions";
import styles from "./Brick.module.css";
import { UnitSystemContextType } from "@/app/types/types";

export function Brick({
  data,
  kindOfData,
  title,
  desc,
}: {
  data: number | string | null;
  kindOfData: string;
  title: string;
  desc: string | null;
}) {
  const unitSystemContext = useContext<UnitSystemContextType | null>(
    UnitSystemContext
  );
  const brickModalContext = useContext(BrickModalContext);

  const unitSystem =
    unitSystemContext?.unitSystem.data === "US" ||
    unitSystemContext?.unitSystem.data === "METRIC" ||
    unitSystemContext?.unitSystem.data === "UK"
      ? unitSystemContext?.unitSystem.data
      : "METRIC";
  function handleOnClick() {
    brickModalContext?.setIsModalShown(true);
    brickModalContext?.setModalData({
      data: data,
      kindOfData: kindOfData,
      title: title,
      desc: desc,
    });
  }
  const titleData: string | number | null =
    typeof kindOfData === "string" ? kindOfData : 0;
  return (
    <li key={title} className={styles.item}>
      <button className={styles.wrapperButton} onClick={handleOnClick}>
        <span className={styles.title}>{title}</span>
        <strong className={styles.icon}>
          <Icon data={titleData} kindOfData={"title"} />
        </strong>
        <span className={styles.data}>
          {(typeof data === "number" &&
          checkSign(kindOfData, unitSystem) === "°F"
            ? systemsConvert.toFahrenheit(data)
            : data) ||
            (typeof data === "number" &&
            checkSign(kindOfData, unitSystem) === "miles/h"
              ? systemsConvert.toMiles(data)
              : data)}{" "}
          {checkSign(kindOfData, unitSystem)}
        </span>
        {(kindOfData === "winddir" || kindOfData === "conditions") && (
          <span className={styles.icon}>
            <Icon data={data} kindOfData={kindOfData} />
          </span>
        )}
      </button>
    </li>
  );
}
