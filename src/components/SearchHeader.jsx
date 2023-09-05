import React from "react";
import { useWeather } from "../assets/context/Context";

function SearchHeader() {
  const { city, setCity } = useWeather();

  const handleOnChange = (e) => {
    setCity(e.target.value);
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    setCity("");
    console.log(city);
  };

  return (
    <div className="search-header">
      <form>
        <h4 className="h4">{city}</h4>

        <input
          className="input"
          placeholder="Şehir Giriniz"
          value={city}
          onChange={handleOnChange}
        />
        <button className="button" onClick={handleOnClick}>
          Arama
        </button>
      </form>
    </div>
  );
}

export default React.memo(SearchHeader);
