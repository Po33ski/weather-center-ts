import { useRef, forwardRef } from "react";
import { Button } from "../Button/Button";
import styles from "./CurrentForm.module.css";
//
const Input = forwardRef<HTMLInputElement>(function Input(prop, ref) {
  return (
    <input
      ref={ref}
      type="text"
      id="city"
      className={styles.input}
      placeholder="City"
    />
  );
});

export const CurrentForm = ({
  onCitySubmit,
}: {
  onCitySubmit: (cityData: string | undefined) => void;
}) => {
  const cityInputRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(event: any) {
    event.preventDefault();

    const city: string | undefined =
      cityInputRef.current?.value !== ""
        ? cityInputRef.current?.value
        : "cracow";
    onCitySubmit(city);
  }

  return (
    <div className={styles.cont}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <div className={styles.cell}>
            <input
              ref={cityInputRef}
              type="text"
              id="city"
              className={styles.input}
              placeholder="City"
            />
          </div>
        </div>
        <div>
          <Button onClick={() => {}}>Check</Button>
        </div>
      </form>
    </div>
  );
};
