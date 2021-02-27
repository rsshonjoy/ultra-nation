import React from 'react';

const Country = (props) => {
  const { country } = props;
  const flagStyle = { height: '50px' };
  const countryStyle = { border: '1px solid red', margin: '10px', padding: '10px' };
  const { handleAddCountry } = props;
  return (
    <div style={countryStyle}>
      <h4>This is a {country.name}</h4>
      <img style={flagStyle} src={country.flag} alt="" />
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>
        <small>Region: {country.region}</small>
      </p>
      <button type="button" onClick={handleAddCountry}>
        Add Country
      </button>
    </div>
  );
};

export default Country;
