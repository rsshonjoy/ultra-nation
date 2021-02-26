import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        console.log(data);
        const names = data.map((country) => country.name);
        console.log(names);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      <h1>country loaded: {countries.length}</h1>
    </div>
  );
}

export default App;
