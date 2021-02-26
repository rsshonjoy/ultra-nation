import React from 'react';

const Country = (props) => {
  const { country } = props;
  console.log(props);
  return (
    <div>
      <h4>This is a {country.name}</h4>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
    </div>
  );
};

export default Country;
