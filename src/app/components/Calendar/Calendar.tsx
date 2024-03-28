import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../weather_icons_data/css/weather-icons.css";
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
      <div className="flex gap-[180px] mt-2 ">
        <label htmlFor="startDate">Start Date</label>
        <label htmlFor="endDate">End Date</label>
      </div>
      <div className="flex">
        <div>
          <label htmlFor="startDate" className="sr-only">
            Start Date
          </label>
          <DatePicker
            id="startDate"
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            value={startDateV}
            className="flex pt-1 pb-1 px-2 mt-2 mb-2 rounded-md border-black border-2 text-lg items-center justify-center"
            maxDate={now}
            onChange={(date) => {
              date = date ? date : new Date();
              setStartDate(date);
            }}
          />
        </div>
        <div className="text-2xl pl-2 pr-2 mt-3">
          <i className="wi wi-direction-right" />
        </div>
        <div>
          <label htmlFor="endDate" className="sr-only">
            End Date
          </label>
          <DatePicker
            id="endDate"
            dateFormat="dd/MM/yyyy"
            selected={endDate}
            value={endDateV}
            className="flex pt-1 pb-1 px-2 mt-2 mb-2 rounded-md border-black border-2 text-lg items-center justify-center"
            maxDate={now}
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
