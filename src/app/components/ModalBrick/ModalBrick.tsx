import { useContext } from "react";
import Image from "next/image";
import { BrickModalContext } from "@/app/contexts/BrickModalContext";
import { UnitSystemContext } from "@/app/contexts/UnitSystemContext";
import { Icon } from "../Icon/Icon";
import { checkSign, systemsConvert } from "@/app/functions/functions";
import { Button } from "../Button/Button";
import { whatImage } from "@/app/functions/functions";
import {
  BrickModalContextType,
  UnitSystemContextType,
} from "@/app/types/types";
import styles from "./ModalBrick.module.css";
export function ModalBrick() {
  const unitSystemContext = useContext<UnitSystemContextType | null>(
    UnitSystemContext
  );
  const brickModalContext = useContext<BrickModalContextType | null>(
    BrickModalContext
  );

  const data =
    typeof brickModalContext?.modalData.data === "string" ||
    typeof brickModalContext?.modalData.data === "number"
      ? brickModalContext?.modalData.data
      : "";

  const dataN =
    typeof brickModalContext?.modalData.data === "number"
      ? brickModalContext?.modalData.data
      : 0;
  const kindOfData =
    typeof brickModalContext?.modalData.kindOfData === "string"
      ? brickModalContext?.modalData.kindOfData
      : "";
  const unitSystem =
    unitSystemContext?.unitSystem.data === "US" ||
    unitSystemContext?.unitSystem.data === "METRIC" ||
    unitSystemContext?.unitSystem.data === "UK"
      ? unitSystemContext?.unitSystem.data
      : "METRIC";
  const photo = whatImage(data, kindOfData);
  return (
    <div className={styles.modal}>
      <div className={styles.photo}>
        <Image src={photo} fill={true} alt="alt" placeholder="blur" />
        <div className={styles.wrapper}>
          <div className={styles.contentWrapper}>
            <div className={styles.flexDiv}>
              <h1 className={styles.title}>
                {brickModalContext?.modalData.title}
              </h1>
              <strong className={styles.icon}>
                <Icon data={kindOfData} kindOfData={"title"} />
              </strong>
            </div>
            <div className={styles.flexDiv}>
              <h2 className={styles.data}>
                {(checkSign(kindOfData, unitSystem) === "°F"
                  ? systemsConvert.toFahrenheit(dataN)
                  : data) ||
                  (checkSign(kindOfData, unitSystem) === "miles/h"
                    ? systemsConvert.toMiles(dataN)
                    : data)}{" "}
                {checkSign(kindOfData, unitSystem)}
              </h2>
              {(kindOfData === "winddir" || kindOfData === "conditions") && (
                <span className={styles.icon}>
                  <Icon data={data} kindOfData={kindOfData} />
                </span>
              )}
            </div>
            <p>{brickModalContext?.modalData.desc}</p>
            <Button
              onClick={() =>
                brickModalContext?.setIsModalShown(
                  !brickModalContext.isModalShown
                )
              }
            >
              {" "}
              Close{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
