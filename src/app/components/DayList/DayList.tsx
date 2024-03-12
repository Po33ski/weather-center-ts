import { useContext } from "react";
import { Icon } from "../Icon/Icon";
import { UnitSystemContext } from "@/app/contexts/UnitSystemContext";
import { UNIT_SYSTEMS } from "@/app/constants/unitSystems";
import { systemsConvert } from "@/app/functions/functions";
import "../../weather_icons_data/css/weather-icons.css";
import styles from "./DayList.module.css";
import { HoursData } from "@/app/types/interfaces";

export function DayList({ data }: { data: HoursData[] }) {
  const unitSystemContext = useContext(UnitSystemContext);
  const unitSystem =
    unitSystemContext?.unitSystem.data === "US" ||
    unitSystemContext?.unitSystem.data === "METRIC" ||
    unitSystemContext?.unitSystem.data === "UK"
      ? unitSystemContext?.unitSystem.data
      : "METRIC";
  return (
    <section className={styles.section}>
      <table className={styles.tableContainer}>
        <thead>
          <tr>
            <th>
              Hour <i className="wi wi-time-3" />
            </th>
            <th>
              Temperature {UNIT_SYSTEMS[unitSystem].temperature}{" "}
              <i className="wi wi-thermometer" />
            </th>
            <th>
              Wind Direction <i className="wi wi-wind-direction" />
            </th>
            <th>
              Wind speed {UNIT_SYSTEMS[unitSystem].distance}{" "}
              <i className="wi wi-strong-wind" />
            </th>
            <th>
              Humidity <i className="wi wi-humidity" />
            </th>
            <th>
              Air Pressure{" hPa "}
              <i className="wi wi-barometer" />
            </th>
            <th>
              Conditions <i className="wi wi-day-cloudy-high" />
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((hour, index) => (
            <tr key={index}>
              {index <= 9 ? <td>0{index}:00:00</td> : <td>{index}:00:00</td>}
              <td>
                {UNIT_SYSTEMS[unitSystem].temperature !== "°C"
                  ? systemsConvert.toFahrenheit(hour["temp"])
                  : hour["temp"]}
              </td>
              <td>
                {hour.winddir}{" "}
                <Icon data={hour.winddir} kindOfData={"winddir"} />{" "}
              </td>
              <td>
                {UNIT_SYSTEMS[unitSystem].distance !== "km/h"
                  ? systemsConvert.toMiles(hour["windspeed"])
                  : hour["windspeed"]}
              </td>
              <td>
                {hour.humidity}{" "}
                <Icon data={hour.humidity} kindOfData={"humidity"} />
              </td>
              <td>
                {hour.pressure}{" "}
                <Icon data={hour.pressure} kindOfData={"pressure"} />
              </td>
              <td>
                {hour.conditions}{" "}
                <Icon data={hour.conditions} kindOfData={"conditions"} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
