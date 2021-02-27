import { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
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
  const handleAddCountry = () => {
    console.log('added');
  };

  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      <h3>Country Added</h3>
      {countries.map((country) => (
        <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code} />
      ))}
    </div>
  );
}

export default App;
