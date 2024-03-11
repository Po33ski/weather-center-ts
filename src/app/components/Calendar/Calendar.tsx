import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../weather_icons_data/css/weather-icons.css";
import styles from "./Calendar.module.css";
import { normalDateFormatted } from "@/app/functions/functions";
import { useEffect, useState } from "react";

export function Calendar({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: {
  startDate: Date;
  setStartDate: (date: Date) => void;
  endDate: Date;
  setEndDate: (date: Date) => void;
}) {
  const [isClient, setIsClient] = useState<boolean>(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const startDateV = normalDateFormatted(startDate);
  const endDateV = normalDateFormatted(endDate);
  const now = new Date();

  return (
    <div>
      {isClient && (
        <div>
          <div className={styles.desc}>
            <h4>Start Date</h4>
            <h4>End Date</h4>
          </div>
          <div className={styles.cell}>
            <div>
              <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={startDate}
                value={startDateV}
                className={styles.picker}
                maxDate={now}
                onChange={(date) => {
                  date = date ? date : new Date();
                  setStartDate(date);
                }}
              />
            </div>
            <div className={styles.arrow}>
              <i className="wi wi-direction-right" />
            </div>
            <div>
              <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={endDate}
                value={endDateV}
                className={styles.picker}
                maxDate={now}
                onChange={(date) => {
                  date = date ? date : new Date();
                  setEndDate(date);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
