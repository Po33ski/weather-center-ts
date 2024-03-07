"use client";
import {
  useState,
  useCallback,
  useContext,
  useEffect,
  ReactPortal,
} from "react";
import { createPortal } from "react-dom";
import { CurrentForm } from "../components/CurrentForm/CurrentForm";
import { WeatherView } from "../components/WeatherView/WeatherView";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { MainPhoto } from "../components/MainPhoto/MainPhoto";
import { ModalBrick } from "../components/ModalBrick/ModalBrick";
import { ModalInfo } from "../components/ModalInfo/ModalInfo";
import { BrickModalContext } from "../contexts/BrickModalContext";
import { InfoModalContext } from "../contexts/InfoModalContext";
import { API_KEY, API_HTTP } from "../constants/apiConstants";
import {
  BrickModalContextType,
  CityContextType,
  InfoModalContextType,
} from "../types/types";
import { CurrentData } from "../types/interfaces";
import { DayList } from "../components/DayList/DayList";
import { MyText } from "../components/MyText/MyText";
import { CityContext } from "../contexts/CityContextType";
import { ButtonLink } from "../components/ButtonLink/ButtonLink";
import { capitalizeFirstLetter } from "../functions/functions";

export function HoursPage() {
  const brickModalContext = useContext<BrickModalContextType | null>(
    BrickModalContext
  );
  const infoModalContext = useContext<InfoModalContextType | null>(
    InfoModalContext
  );
  const cityContext = useContext<CityContextType | null>(CityContext);
  const [data, setData] = useState<CurrentData>({
    address: null,
    days: [
      {
        description: null,
        temp: null,
        tempmax: null,
        tempmin: null,
        winddir: null,
        windspeed: null,
        conditions: null,
        sunrise: null,
        sunset: null,
        hours: [
          {
            temp: null,
            conditions: null,
            winddir: null,
            windspeed: null,
          },
        ],
      },
    ],
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [brickModal, setBrickModal] = useState<ReactPortal | null>(null);
  const [infoModal, setInfoModal] = useState<ReactPortal | null>(null);

  useEffect(() => {
    const createBrickModal = createPortal(<ModalBrick />, document.body);
    setBrickModal(createBrickModal);
  }, []);

  useEffect(() => {
    const createInfoModal = createPortal(<ModalInfo />, document.body);
    setInfoModal(createInfoModal);
  }, []);

  const handleError = useCallback((e: Error) => {
    setIsError(e.message);
    setTimeout(() => {
      setIsError(null);
    }, 5000);
  }, []);

  useEffect(() => {
    fetch(
      `${API_HTTP}${cityContext?.city.data}?unitGroup=metric&include=hours%2Cdays&key=${API_KEY}&contentType=json`
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
  }, [cityContext?.city.data, handleError]);
  function onCitySubmit(cityData: string | undefined) {
    cityContext?.city.setToLocalStorage(cityData);
    setIsLoading(true);
    fetch(
      `${API_HTTP}${cityData}?unitGroup=metric&include=hours%2Cdays&key=${API_KEY}&contentType=json`
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
  const address = capitalizeFirstLetter(data["address"]);
  return (
    <>
      <CurrentForm onCitySubmit={onCitySubmit} />
      {isError && <ErrorMessage>{isError}</ErrorMessage>}
      {data["address"] && (
        <div>
          {address !== null ? <MyText>The weather for {address}:</MyText> : ""}
          <DayList data={data["days"][0]["hours"]} />
          <ButtonLink path={"/current"}>Back</ButtonLink>
        </div>
      )}
      {brickModalContext?.isModalShown && brickModal}
      {infoModalContext?.isInfoModalShown && infoModal}
    </>
  );
}
