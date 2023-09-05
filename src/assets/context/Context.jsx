import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("Ankara");
  const [icon, setIcon] = useState("");
  const [nextDay, setNextDay] = useState([]);

  let date = new Date();
  let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  let day = days[date.getDay()];

  useEffect(() => {
    axios
      .get(
        ` http://api.weatherapi.com/v1/forecast.json?key=07ee700140924ff38df82411230409 &q=${city}&days=8&aqi=no&alerts=no `
      )

      .then((res) => {
        setWeather(res.data.current.temp_c);
        setIcon(res.data.current.condition.icon);
        setNextDay(res.data.forecast.forecastday);

        console.log(res.data.forecast.forecastday);
      })

      .catch((e) => console.log("hata"));
  }, [city]);

  const values = { weather, setWeather, city, setCity, icon, day, nextDay };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
