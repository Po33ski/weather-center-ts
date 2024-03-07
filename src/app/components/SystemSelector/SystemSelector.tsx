import styles from "./SystemSelector.module.css";
import { useContext, useEffect, useState } from "react";
import { SYSTEMS } from "@/app/constants/unitSystems";
import { UnitSystemContext } from "@/app/contexts/UnitSystemContext";
<<<<<<< Updated upstream
import { useLocalStorage } from "@/app/hooks/useLocalStorage";
=======
>>>>>>> Stashed changes
import { UnitSystemContextType } from "@/app/types/types";

export function SystemSelector() {
  const unitSystemContext = useContext<UnitSystemContextType | null>(
    UnitSystemContext
  );
<<<<<<< Updated upstream
  //const [,setToLocalStorage] = useLocalStorage("data", "METRIC" );

=======
  const [isClient, setIsClient] = useState<boolean>(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
>>>>>>> Stashed changes
  const unitSystem =
    unitSystemContext?.unitSystem.data === "US" ||
    unitSystemContext?.unitSystem.data === "METRIC" ||
    unitSystemContext?.unitSystem.data === "UK"
      ? unitSystemContext?.unitSystem.data
      : "METRIC";
  return (
    <div>
      {isClient && (
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
      )}
    </div>
  );
}

/*

            value={
              typeof unitSystemContext?.unitSystem.data === "string"
                ? unitSystemContext?.unitSystem.data
                : "METRIC"
            }

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
