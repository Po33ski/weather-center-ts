import { Brick } from "../Brick/Brick";
import { MyText } from "../MyText/MyText";
import { capitalizeFirstLetter } from "@/app/functions/functions";
import { CurrentDataDay } from "@/app/types/interfaces";
import styles from "./WeatherView.module.css";
import { Button } from "../Button/Button";

export function WeatherView({
  data,
  address,
}: {
  data: CurrentDataDay;
  address: string | null;
}) {
  address = capitalizeFirstLetter(address);
  return (
    <>
      {address !== null ? (
        <MyText>The current weather for {address} :</MyText>
      ) : (
        ""
      )}

      <section className={styles.section}>
        <ul className={styles.list}>
          <Brick
            data={data["temp"]}
            kindOfData={"temp"}
            title={"Average temperature"}
            desc={data["description"]}
          />
          <Brick
            data={data["tempmax"]}
            kindOfData={"tempmax"}
            title={"Max. temperature"}
            desc={data["description"]}
          />
          <Brick
            data={data["tempmin"]}
            kindOfData={"tempmin"}
            title={"Min. temperature"}
            desc={data["description"]}
          />
          <Brick
            data={data["conditions"]}
            kindOfData={"conditions"}
            title={"Conditions"}
            desc={data["description"]}
          />
          <Brick
            data={data["windspeed"]}
            kindOfData={"windspeed"}
            title={" Wind speed"}
            desc={data["description"]}
          />
          <Brick
            data={data["winddir"]}
            kindOfData={"winddir"}
            title={" Wind direction"}
            desc={data["description"]}
          />
          <Brick
            data={data["pressure"]}
            kindOfData={"pressure"}
            title={"Pressure"}
            desc={data["description"]}
          />
          <Brick
            data={data["humidity"]}
            kindOfData={"humidity"}
            title={"Humidity"}
            desc={data["description"]}
          />
          <Brick
            data={data["sunrise"]}
            kindOfData={"sunrise"}
            title={"Sunrise"}
            desc={data["description"]}
          />
          <Brick
            data={data["sunset"]}
            kindOfData={"sunset"}
            title={"Sunset"}
            desc={data["description"]}
          />
        </ul>
      </section>
    </>
  );
}
