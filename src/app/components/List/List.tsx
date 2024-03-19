import { useContext } from "react";
import { UnitSystemContext } from "@/app/contexts/UnitSystemContext";
import { UNIT_SYSTEMS } from "@/app/constants/unitSystems";
import { Icon } from "../Icon/Icon";
import "../../weather_icons_data/css/weather-icons.css";
import styles from "./List.module.css";
import { findDirection, systemsConvert } from "@/app/functions/functions";
import { HistoryAndForecastDay } from "@/app/types/interfaces";

export function List({ data }: { data: HistoryAndForecastDay[] }) {
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
              Date <i className="wi wi-time-3" />
            </th>
            <th>
              Max. Temperature {UNIT_SYSTEMS[unitSystem].temperature}{" "}
              <i className="wi wi-thermometer" />
            </th>
            <th>
              Min. Temperature {UNIT_SYSTEMS[unitSystem].temperature}{" "}
              <i className="wi wi-thermometer-exterior" />
            </th>
            <th>
              Wind Direction <i className="wi wi-wind-direction" />
            </th>
            <th>
              Wind speed {UNIT_SYSTEMS[unitSystem].distance}{" "}
              <i className="wi wi-strong-wind" />
            </th>
            <th>
              {" "}
              Humidity <i className="wi wi-humidity" />
            </th>
            <th>
              Air Pressure{" hPa "}
              <i className="wi wi-barometer" />
            </th>
            <th>
              Conditions <i className="wi wi-day-cloudy-high" />
            </th>
            <th>
              Sunrise <i className="wi wi-sunrise" />
            </th>
            <th>
              Sunset <i className="wi wi-sunset" />
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((day) => (
            <tr key={Math.random()}>
              <td>{day.datetime}</td>
              <td>
                {UNIT_SYSTEMS[unitSystem].temperature !== "°C"
                  ? systemsConvert.toFahrenheit(day["tempmax"])
                  : day["tempmax"]}
              </td>
              <td>
                {UNIT_SYSTEMS[unitSystem].temperature !== "°C"
                  ? systemsConvert.toFahrenheit(day["tempmin"])
                  : day["tempmin"]}
              </td>
              <td>
                {day.winddir} <Icon data={day.winddir} kindOfData={"winddir"} />{" "}
                {findDirection(day.winddir)}
              </td>
              <td>
                {UNIT_SYSTEMS[unitSystem].distance !== "km/h"
                  ? systemsConvert.toMiles(day["windspeed"])
                  : day["windspeed"]}
              </td>
              <td>
                {day.humidity}{" "}
                <Icon data={day.humidity} kindOfData={"humidity"} />
              </td>
              <td>
                {day.pressure}{" "}
                <Icon data={day.pressure} kindOfData={"pressure"} />
              </td>
              <td>
                {day.conditions}{" "}
                <Icon data={day.conditions} kindOfData={"conditions"} />
              </td>
              <td>{day.sunrise}</td>
              <td>{day.sunset}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
