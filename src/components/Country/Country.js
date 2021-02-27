import React from 'react';

const Country = (props) => {
  const { country } = props;
  const { name, flag, capital, population, region } = country;
  const flagStyle = { height: '50px' };
  const countryStyle = { border: '1px solid red', margin: '10px', padding: '10px' };
  const { handleAddCountry } = props;
  return (
    <div style={countryStyle}>
      <h4>This is a {name}</h4>
      <img style={flagStyle} src={flag} alt="" />
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>
        <small>Region: {region}</small>
      </p>
      <button type="button" onClick={handleAddCountry}>
        Add Country
      </button>
    </div>
  );
};

export default Country;
