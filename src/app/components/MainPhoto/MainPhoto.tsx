import styles from "./MainPhoto.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MAIN_DESCRIPTIONS, MAIN_HEADERS } from "@/app/constants/descriptions";
import { MAIN_PHOTOS } from "@/app/constants/mainPhotos";

export function MainPhoto() {
  let pageName: "current" | "forecast" | "history" | "/";
  let path = "/";
  path = usePathname().slice(1);
  pageName =
    path === "current" || path === "forecast" || path === "history"
      ? path
      : "current";
  console.log("path:", path);

  const photo = path === "/" ? MAIN_PHOTOS["current"] : MAIN_PHOTOS[pageName];
  const description =
    path === "/" ? MAIN_DESCRIPTIONS["current"] : MAIN_DESCRIPTIONS[pageName];
  const header =
    path === "/" ? MAIN_HEADERS["current"] : MAIN_HEADERS[pageName];
  return (
    <div className={styles.mainPhoto}>
      <Image src={photo} fill={true} alt="photo" />
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <h2>{header}</h2>
          <h4>{description}</h4>
        </div>
      </div>
    </div>
  );
}
