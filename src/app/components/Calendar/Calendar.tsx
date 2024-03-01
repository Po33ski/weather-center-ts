import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../weather_icons_data/css/weather-icons.css";
import styles from "./Calendar.module.css";

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
  return (
    <div>
      <div className={styles.desc}>
        <h4>Start Date</h4>
        <h4>End Date</h4>
      </div>
      <div className={styles.cell}>
        <div className={styles.picker}>
          <ReactDatePicker
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            onChange={(date) => {
              date = date ? date : new Date();
              setStartDate(date);
            }}
          />
        </div>
        <div className={styles.arrow}>
          <i className="wi wi-direction-right" />
        </div>
        <div className={styles.picker}>
          <ReactDatePicker
            dateFormat="dd/MM/yyyy"
            selected={endDate}
            onChange={(date) => {
              date = date ? date : new Date();
              setEndDate(date);
            }}
          />
        </div>
      </div>
    </div>
  );
}
