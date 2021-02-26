import React from 'react';

const Country = (props) => {
  const { country } = props;
  const flagStyle = { height: '50px' };
  return (
    <div>
      <h4>This is a {country.name}</h4>
      <img style={flagStyle} src={country.flag} alt="" />
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>
        <small>Region: {country.region}</small>
      </p>
    </div>
  );
};

export default Country;
