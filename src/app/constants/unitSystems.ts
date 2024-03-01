import { MetricSystems, UnitSystems } from "../types/interfaces";

export const SYSTEMS: MetricSystems = {
  US: "US",
  METRIC: "METRIC",
  UK: "UK",
};

export const UNIT_SYSTEMS: UnitSystems = {
  US: { unit: "US", temperature: "°F", distance: "miles/h" },
  METRIC: { unit: "METRIC", temperature: "°C", distance: "km/h" },
  UK: { unit: "UK", temperature: "°C", distance: "miles/h" },
};

export const SYSTEMS_SIGN = {
  temperature: {
    US: "°F",
    METRIC: "°C",
    UK: "°C",
  },
  distance: {
    US: "miles/h",
    METRIC: "km/h",
    UK: "miles/h",
  },
};
