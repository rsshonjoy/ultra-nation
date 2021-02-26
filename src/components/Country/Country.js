import React from 'react';

const Country = (props) => {
  const { countryName } = props;
  console.log(props);
  return (
    <div>
      <h4>This is a {countryName}</h4>
    </div>
  );
};

export default Country;
