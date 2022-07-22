import { useState, useEffect } from "react";

function CountryCard() {
  const [countries, setCountries] = useState([]);
  const fetchCountryData = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const countries = await res.json();
    setCountries(countries);
  };
  useEffect(() => {
    fetchCountryData();
  });
  return (
    <>
      {countries.map((country) => {
        const { name, population, region, capital, flags } = country;
        return (
          <div>
            <div>
              <img src={flags.svg} alt={name.common} />
              <h3>{name.common}</h3>
              <h4>Population:{population}</h4>
              <h4>region:{region}</h4>
              <h4>capital:{capital}</h4>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CountryCard;
