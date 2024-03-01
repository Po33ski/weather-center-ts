import styles from "./SystemSelector.module.css";
import { SYSTEMS } from "@/app/constants/unitSystems";
import { UnitSystemContext } from "@/app/contexts/UnitSystemContext";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";
import { UnitSystemContextType } from "@/app/types/types";
import { useContext } from "react";

export function SystemSelector() {
  const unitSystemContext = useContext<UnitSystemContextType | null>(
    UnitSystemContext
  );
  //const [,setToLocalStorage] = useLocalStorage("data", "METRIC" );

  const unitSystem =
    unitSystemContext?.unitSystem.data === "US" ||
    unitSystemContext?.unitSystem.data === "METRIC" ||
    unitSystemContext?.unitSystem.data === "UK"
      ? unitSystemContext?.unitSystem.data
      : "METRIC";
  return (
    <div>
      <select
        value={unitSystem}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          unitSystemContext?.unitSystem.setToLocalStorage(
            e.currentTarget.value
          );
        }}
        className={styles.systemSelector}
      >
        <option value={SYSTEMS.METRIC}>{SYSTEMS.METRIC}</option>
        <option value={SYSTEMS.UK}>{SYSTEMS.UK}</option>
        <option value={SYSTEMS.US}>{SYSTEMS.US}</option>
      </select>
    </div>
  );
}

/*
        <option value={SYSTEMS.METRIC}>
          {SYSTEMS.METRIC}
          {" ("}
          {SYSTEMS_SIGN.temperature.METRIC}
          {","}
          {SYSTEMS_SIGN.distance.METRIC}
          {")"}
        </option>
        <option value={SYSTEMS.UK}>
          {SYSTEMS.UK}
          {" ("}
          {SYSTEMS_SIGN.temperature.UK}
          {","}
          {SYSTEMS_SIGN.distance.UK}
          {")"}
        </option>
        <option value={SYSTEMS.US}>
          {SYSTEMS.US}
          {" ("}
          {SYSTEMS_SIGN.temperature.US}
          {","}
          {SYSTEMS_SIGN.distance.US}
          {")"}
        </option>
        */
