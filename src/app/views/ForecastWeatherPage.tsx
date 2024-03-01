"use client";
import {
  useState,
  useCallback,
  useContext,
  useEffect,
  ReactPortal,
} from "react";
import { CurrentForm } from "../components/CurrentForm/CurrentForm";
import { List } from "../components/List/List";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { API_KEY, API_HTTP } from "../constants/apiConstants";
import { MainPhoto } from "../components/MainPhoto/MainPhoto";
import { ModalInfo } from "../components/ModalInfo/ModalInfo";
import { InfoModalContext } from "../contexts/InfoModalContext";
import { createPortal } from "react-dom";
import { capitalizeFirstLetter } from "../functions/functions";
import { MyText } from "../components/MyText/MyText";
import { InfoModalContextType } from "../types/types";
import { WeatherData } from "../types/interfaces";

export const ForecastWeatherPage = () => {
  const infoModalContext = useContext<InfoModalContextType | null>(
    InfoModalContext
  );
  const [data, setData] = useState<WeatherData>({
    address: null,
    days: [
      {
        datetime: null,
        temp: null,
        tempmax: null,
        tempmin: null,
        winddir: null,
        windspeed: null,
        conditions: null,
        sunrise: null,
        sunset: null,
      },
    ],
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [infoModal, setInfoModal] = useState<ReactPortal | null>(null);

  useEffect(() => {
    const createInfoModal: ReactPortal = createPortal(
      <ModalInfo />,
      document.body
    );
    setInfoModal(createInfoModal);
  }, []);

  const handleError = useCallback((e: Error) => {
    setIsError(e.message);
    setTimeout(() => {
      setIsError(null);
    }, 5000);
  }, []);

  function onCitySubmit(cityData: string | undefined) {
    setIsLoading(true);
    fetch(
      `${API_HTTP}${cityData}?unitGroup=metric&key=${API_KEY}&contentType=json`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            "Error, please wait until the request becomes available again or check if your request complies with the guidelines"
          );
        }
      })
      .then((response) => {
        console.log(response);
        setData(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
        handleError(err);
      });
  }
  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <>
      <CurrentForm onCitySubmit={onCitySubmit} />
      {isError && <ErrorMessage>{isError}</ErrorMessage>}
      {data["address"] !== null ? (
        <MyText>
          The weather forecast for {capitalizeFirstLetter(data["address"])} for
          15 days:
        </MyText>
      ) : (
        ""
      )}
      {data["address"] ? <List data={data["days"]} /> : <MainPhoto />}
      {infoModalContext?.isInfoModalShown && infoModal}
    </>
  );
};
