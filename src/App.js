import { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        // console.log(data);
        // const names = data.map((country) => country.name);
        // console.log(names);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleAddCountry = (country) => {
    const newCountry = [...cart, country];
    setCart(newCountry);
  };

  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      <h3>Country Added: {cart.length}</h3>
      {countries.map((country) => (
        <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code} />
      ))}
    </div>
  );
}

export default App;
