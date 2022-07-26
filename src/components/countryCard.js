import { useState, useEffect } from "react";
import Styles from "./countryCard.module.css";

function CountryCard() {
  const [countries, setCountries] = useState([]);
  const fetchCountryData = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const countries = await res.json();
    setCountries(countries);
  };
  useEffect(() => {
    fetchCountryData();
  }, []);
  return (
    <div className={Styles.grid}>
      {countries.map((country) => {
        const { name, population, region, capital, flags } = country;
        return (
          <div>
            <img className={Styles.flag} src={flags.svg} alt={name.common} />
            <div className={Styles.info}>
              <h3>{name.common}</h3>
              <h4>
                <span>Population: </span>
                {population}
              </h4>
              <h4>
                <span>region: </span>
                {region}
              </h4>
              <h4>
                <span>capital: </span>
                {capital}
              </h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CountryCard;
