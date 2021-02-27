import React from 'react';

const Cart = (props) => {
  const { cart } = props;
  const totalPopulation = cart.reduce((total, country) => total + country.population, 0);
  return (
    <div>
      <h2>This is cart: {cart.length}</h2>
      <p>Total population: {totalPopulation}</p>
    </div>
  );
};

export default Cart;
