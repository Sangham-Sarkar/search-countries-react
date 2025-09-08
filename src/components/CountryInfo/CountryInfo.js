import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { apiURL } from "../util/api";

const CountryInfo = () => {
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [borderCountries, setBorderCountries] = useState([]);

  const { countryName } = useParams();

  useEffect(() => {
    const getCountryByName = async () => {
      setIsLoading(true);
      setError("");
      try {
        const res = await fetch(`${apiURL}/name/${countryName}?fullText=true`);
        if (!res.ok) throw new Error("Could not find country!");
        const data = await res.json();
        setCountry(data[0]);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    getCountryByName();
  }, [countryName]);

  useEffect(() => {
    const fetchBorderCountries = async () => {
      if (!country?.borders || country.borders.length === 0) {
        setBorderCountries([]);
        return;
      }
      try {
        const responses = await Promise.all(
          country.borders.map((border) =>
            fetch(`${apiURL}/alpha/${border}`).then((res) => res.json())
          )
        );
        setBorderCountries(
          responses.map((res, i) => res[0]?.name?.common || country.borders[i])
        );
      } catch {
        setBorderCountries([]);
      }
    };

    fetchBorderCountries();
  }, [country]);

  return (
    <div className="country__info__wrapper">
      <Link to="/">
        <button>Back</button>
      </Link>
      {isLoading && !error && <h4>Loading...</h4>}
      {error && !isLoading && <h4>{error}</h4>}
      {country && (
        <div className="country__info__container">
          <div className="country__info-img">
            <img src={country.flags.png} alt={country.name.common} />
          </div>
          <div className="country__info">
            <h3>{country.name.common}</h3>
            <div className="country__info-left">
              <h5>
                Population:{" "}
                <span>
                  {new Intl.NumberFormat().format(country.population)}
                </span>
              </h5>
              <h5>
                Region: <span>{country.region}</span>
              </h5>
              <h5>
                Sub Region: <span>{country.subregion}</span>
              </h5>
              <h5>
                Capital: <span>{country.capital?.join(", ")}</span>
              </h5>
              <h5>
                Border Countries:{" "}
                {borderCountries.length > 0
                  ? borderCountries.join(", ")
                  : "None"}
              </h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryInfo;
