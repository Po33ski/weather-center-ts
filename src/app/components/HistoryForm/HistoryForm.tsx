import { useRef, forwardRef, useState } from "react";
import { Button } from "../Button/Button";
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
    <div className="flex items-center justify-center bg-white">
      <form onSubmit={handleSubmit} className="pt-16 pb-8">
        <div className="grid grid-cols-1 mb-4">
          <label htmlFor="city" className="sr-only">
            City
          </label>
          <input
            ref={cityInputRef}
            type="text"
            id="city"
            className="rounded-md px-4 py-2 border-black border-2"
            placeholder="City"
          />
        </div>
        <div className="grid grid-cols-1 mb-4">
          <label htmlFor="startDate" className="sr-only">
            Start Date
          </label>
          <label htmlFor="endDate" className="sr-only">
            End Date
          </label>
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
