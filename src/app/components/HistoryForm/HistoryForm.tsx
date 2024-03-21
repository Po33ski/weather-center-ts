import { useRef, forwardRef, useState } from "react";
import { Button } from "../Button/Button";
import styles from "./HistoryForm.module.css";
import { Calendar } from "../Calendar/Calendar";

export const HistoryForm = ({
  onSubmit,
}: {
  onSubmit: (
    cityData: string | undefined,
    startDate: Date,
    endDate: Date
  ) => void;
}) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const cityInputRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(event: any) {
    event.preventDefault();
    const city: string | undefined =
      cityInputRef.current?.value !== ""
        ? cityInputRef.current?.value
        : "cracow";
    onSubmit(city, startDate, endDate);
  }

  return (
    <div className={styles.cont}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <div className={styles.cell}>
            <input
              ref={cityInputRef}
              className={styles.input}
              type="text"
              id="city"
              placeholder="City"
            />
          </div>
        </div>
        <div className={styles.cell}>
          <Calendar
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </div>
        <div>
          <Button onClick={() => {}}>Check</Button>
        </div>
      </form>
    </div>
  );
};
