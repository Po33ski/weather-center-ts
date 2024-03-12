import { StaticImageData } from "next/image";

export interface PagesInfo {
  current: string;
  forecast: string;
  history: string;
}

export interface MainPhotos {
  current: StaticImageData;
  forecast: StaticImageData;
  history: StaticImageData;
}

export interface MenuOptions {
  optionName: string;
  path: string;
}

export interface MetricSystems {
  US: string;
  METRIC: string;
  UK: string;
}

export interface UnitSystems {
  US: { unit: string; temperature: string; distance: string };
  METRIC: { unit: string; temperature: string; distance: string };
  UK: { unit: string; temperature: string; distance: string };
}

export interface BrickModalData {
  data: string | number | null;
  kindOfData: string | null;
  title: string | null;
  desc: string | null;
}
export interface HoursData {
  temp: number | null;
  conditions: string | null;
  winddir: number | null;
  windspeed: number | null;
  pressure: string | null;
  humidity: string | null;
}
export interface CurrentDataDay {
  description: string | null;
  temp: number | null;
  tempmax: number | null;
  tempmin: number | null;
  winddir: number | null;
  windspeed: number | null;
  conditions: string | null;
  sunrise: string | null;
  sunset: string | null;
  pressure: string | null;
  humidity: string | null;
  hours: [HoursData];
}
export interface CurrentData {
  address: string | null;
  days: [CurrentDataDay];
}

export interface HistoryAndForecastDay {
  datetime: string | null;
  temp: number | null;
  tempmax: number | null;
  tempmin: number | null;
  winddir: number | null;
  windspeed: number | null;
  conditions: string | null;
  sunrise: string | null;
  sunset: string | null;
  pressure: string | null;
  humidity: string | null;
}
export interface WeatherData {
  address: string | null;
  days: [HistoryAndForecastDay];
}
